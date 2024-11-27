
  const marqueeContainer = document.querySelector('.marquee-container');
  const marquee = document.querySelector('.marquee');

  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  marqueeContainer.addEventListener('mousedown', startDragging);
  marqueeContainer.addEventListener('mouseup', stopDragging);
  marqueeContainer.addEventListener('mouseleave', stopDragging);
  marqueeContainer.addEventListener('mousemove', dragImage);

  marqueeContainer.addEventListener('touchstart', startDragging);
  marqueeContainer.addEventListener('touchend', stopDragging);
  marqueeContainer.addEventListener('touchmove', dragImage);

  function startDragging(e) {
    isDragging = true;
    startPos = getPositionX(e);
    marqueeContainer.classList.add('grabbing');
  }

  function stopDragging() {
    isDragging = false;
    marqueeContainer.classList.remove('grabbing');
    prevTranslate = currentTranslate;
  }

  function dragImage(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    marquee.style.transform = `translateX(${currentTranslate}px)`;
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }
