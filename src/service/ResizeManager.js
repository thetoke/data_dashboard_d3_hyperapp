import ResizeObserver from 'resize-observer-polyfill';

/**
 * Resize Manager, creates a new instance of ResizeObserver
 */

const ResizeManager = new ResizeObserver(entries => {

      // This ResizeObserver callback mimics event handlers.
      // It calls Element's onresize method.
      for (let entry of entries)
        if (entry.target.onresize)
          entry.target.onresize(entry);
});


export default ResizeManager
