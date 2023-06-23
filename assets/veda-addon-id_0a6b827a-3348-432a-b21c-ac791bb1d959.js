function veda_fn_id_0a6b827a3348432ab21cac791bb1d959() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_0a6b827a-3348-432a-b21c-ac791bb1d959"/* _____End/Id_____ */;
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]:not(addons, megamenu)`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        /* _____Start/Content_____ */
        
        /* _____End/Content_____ */
      });
    } catch (error) {
      console.log(error);
    }
  };
veda_fn_id_0a6b827a3348432ab21cac791bb1d959();
