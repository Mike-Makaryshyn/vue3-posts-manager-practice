export default {
   name: 'intersaction',
  mounted(el, binding) {
    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    console.log()

    const componentInstance = binding.instance;

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && componentInstance.page < componentInstance.totalPages) {
         componentInstance.loadMorePosts();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};
