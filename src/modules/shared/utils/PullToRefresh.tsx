import { useState, useEffect, ReactNode } from 'react';
import styles from '~/app/components/App/App.module.scss'; // Adjust the import path as necessary

interface PullToRefreshProps {
	onRefresh: () => Promise<void>; // Function to call when refreshing
	children: ReactNode; // Children elements to render
}

const PullToRefresh = ({ onRefresh, children }: PullToRefreshProps) => {
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [startY, setStartY] = useState(0);
	const [currentY, setCurrentY] = useState(0);

	const handleTouchStart = (e: TouchEvent) => {
		setStartY(e.touches[0].clientY);
	};

	const handleTouchMove = (e: TouchEvent) => {
		setCurrentY(e.touches[0].clientY);
		if (currentY > startY && window.scrollY === 0) {
			e.preventDefault(); // Prevent default scrolling
		}
	};

	const handleTouchEnd = () => {
		if (currentY - startY > 100) {
			// Threshold for refresh
			setIsRefreshing(true);
			onRefresh().finally(() => {
				setIsRefreshing(false);
			});
		}
		setCurrentY(0);
	};

	useEffect(() => {
		const touchStartListener = (e: TouchEvent) => handleTouchStart(e);
		const touchMoveListener = (e: TouchEvent) => handleTouchMove(e);
		const touchEndListener = () => handleTouchEnd();

		// Add event listeners with passive: false
		window.addEventListener('touchstart', touchStartListener, {
			passive: false,
		});
		window.addEventListener('touchmove', touchMoveListener, {
			passive: false,
		});
		window.addEventListener('touchend', touchEndListener, {
			passive: false,
		});

		return () => {
			window.removeEventListener('touchstart', touchStartListener);
			window.removeEventListener('touchmove', touchMoveListener);
			window.removeEventListener('touchend', touchEndListener);
		};
	}, [currentY, startY]);

	return (
		<div>
			{isRefreshing && <div className={styles.loader}>Loading...</div>}{' '}
			{/* Use the loader class */}
			{children}
		</div>
	);
};

export default PullToRefresh;
