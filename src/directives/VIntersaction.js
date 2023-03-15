let page = 1;
let totalPages = 0;

const intersection = {
   name: 'intersection',
   mounted(el, binding) {
     const options = {
       rootMargin: '0px',
       threshold: 1.0,
     };
 
     const { loadMorePosts } = binding.value;
 
     const callback = (entries, observer) => {
       const [entry] = entries;
 
       if (entry.isIntersecting && page < totalPages) {
         loadMorePosts();
       }
     };
 
     const observer = new IntersectionObserver(callback, options);
     observer.observe(el);
   },
 
   updated(_, binding) {
     page = binding.value.page;
     totalPages = binding.value.totalPages;
   },
 };
 
 export default intersection;
 