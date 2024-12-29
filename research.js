function expandProject(element) {
  const content = element.querySelector('.expanded-content');
  const isExpanded = element.classList.contains('expanded');

  // Reset all other cards
  document.querySelectorAll('.card').forEach(card => {
    const cardContent = card.querySelector('.expanded-content');
    if (card !== element) {
      card.classList.remove('expanded');
      if (cardContent) cardContent.style.display = 'none';
    }
  });

  if (isExpanded) {
    // Collapse the clicked card
    element.classList.remove('expanded');
    content.style.display = 'none';
  } else {
    // Expand the clicked card
    const rect = element.getBoundingClientRect();
    const root = document.documentElement;

    // Set CSS variables for starting point
    root.style.setProperty('--card-top', `${rect.top}px`);
    root.style.setProperty('--card-left', `${rect.left}px`);

    element.classList.add('expanded');
    content.style.display = 'block';
  }
}

// Close expanded card when clicking outside
document.addEventListener('click', function (event) {
  const expandedCard = document.querySelector('.card.expanded');

  if (expandedCard && !expandedCard.contains(event.target)) {
    expandedCard.classList.remove('expanded');
    const content = expandedCard.querySelector('.expanded-content');
    if (content) content.style.display = 'none';
  }
});
