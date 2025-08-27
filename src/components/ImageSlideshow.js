import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ImageSlideshow.css';

function ImageSlideshow({ images, intervalMs = 4500, className = '' }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(null);
	const [loadedSet, setLoadedSet] = useState(() => new Set());
	const timerRef = useRef(null);
	const containerRef = useRef(null);
	const isHoveredRef = useRef(false);
	const touchStartXRef = useRef(null);

	const normalizedImages = useMemo(() => {
		if (!Array.isArray(images)) return [];
		return images
			.filter(Boolean)
			.map((item) => typeof item === 'string' ? ({ src: item, placeholder: item }) : item)
			.filter((it) => it && it.src);
	}, [images]);

	// Autoplay
	useEffect(() => {
		if (normalizedImages.length === 0) return;

		const start = () => {
			clearInterval(timerRef.current);
			timerRef.current = setInterval(() => {
				if (!isHoveredRef.current) {
					setActiveIndex((prev) => {
						const next = (prev + 1) % normalizedImages.length;
						setPrevIndex(prev);
						return next;
					});
				}
			}, intervalMs);
		};

		start();
		return () => clearInterval(timerRef.current);
	}, [normalizedImages, intervalMs]);

	useEffect(() => {
		const toPreload = [activeIndex, (activeIndex + 1) % normalizedImages.length];
		toPreload.forEach((idx) => {
			const item = normalizedImages[idx];
			if (!item || loadedSet.has(idx)) return;
			const img = new Image();
			img.decoding = 'async';
			img.onload = () => {
				setLoadedSet((prev) => {
					if (prev.has(idx)) return prev;
					const next = new Set(prev);
					next.add(idx);
					return next;
				});
			};
			img.onerror = () => {
				// Fallback: still mark as loaded to avoid permanent invisibility
				setLoadedSet((prev) => {
					if (prev.has(idx)) return prev;
					const next = new Set(prev);
					next.add(idx);
					return next;
				});
			};
			img.src = item.src;
		});
	}, [activeIndex, normalizedImages, loadedSet]);

	const goTo = (index) => {
		if (normalizedImages.length === 0) return;
		setPrevIndex(activeIndex);
		setActiveIndex(((index % normalizedImages.length) + normalizedImages.length) % normalizedImages.length);
	};

	const next = () => goTo(activeIndex + 1);
	const prev = () => goTo(activeIndex - 1);

	const onMouseEnter = () => { isHoveredRef.current = true; };
	const onMouseLeave = () => { isHoveredRef.current = false; };

	const onKeyDown = (e) => {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	};

	const onTouchStart = (e) => {
		touchStartXRef.current = e.touches[0].clientX;
	};
	const onTouchMove = (e) => {
		if (touchStartXRef.current == null) return;
		const delta = e.touches[0].clientX - touchStartXRef.current;
		if (Math.abs(delta) > 40) {
			if (delta < 0) next(); else prev();
			touchStartXRef.current = null;
		}
	};
	const onTouchEnd = () => { touchStartXRef.current = null; };

	// Rotate subtle effects per slide
	const effects = useMemo(() => ['kenburns', 'pan-right', 'pan-left', 'zoom-out'], []);
	const effectFor = (index) => effects[index % effects.length];

	return (
		<div
			className={`slideshow ${className}`}
			ref={containerRef}
			tabIndex={0}
			role="region"
			aria-roledescription="carousel"
			aria-label="Image slideshow"
			onKeyDown={onKeyDown}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
		>
			<div className="slides">
				{normalizedImages.map((item, index) => {
					const isActive = index === activeIndex;
					const isPrev = index === prevIndex;
					const isLoaded = loadedSet.has(index);
					return (
						<div
							key={(item.src || '') + index}
							className={`slide ${isActive ? 'is-active' : 'is-inactive'} ${isPrev ? 'is-prev' : ''} effect-${effectFor(index)}`}
							aria-hidden={!isActive}
						>
							<div
								className={`img-layer placeholder`}
								style={{ backgroundImage: `url(${item.placeholder || item.src})` }}
							/>
							<div
								className={`img-layer full ${isLoaded ? 'is-visible' : ''}`}
								style={{ backgroundImage: `url(${item.src})` }}
							/>
							{(item.title || item.description) && (
								<div className={`caption ${isActive ? 'is-visible' : ''}`} role="group" aria-roledescription="slide caption">
									{item.title && <div className="caption-title">{item.title}</div>}
									{item.description && <div className="caption-desc">{item.description}</div>}
								</div>
							)}
						</div>
					);
				})}
				<div className="vignette" />
			</div>

			<button className="nav prev" onClick={prev} aria-label="Previous slide" />
			<button className="nav next" onClick={next} aria-label="Next slide" />

			<div className="dots" role="tablist" aria-label="Slide navigation">
				{normalizedImages.map((_, index) => (
					<button
						key={index}
						className={`dot ${index === activeIndex ? 'is-active' : ''}`}
						role="tab"
						aria-selected={index === activeIndex}
						aria-controls={`slide-${index}`}
						onClick={() => goTo(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default ImageSlideshow;
