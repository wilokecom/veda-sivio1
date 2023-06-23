function veda_fn_id_81bd98198332429a8d3157cd2682aa57() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_81bd9819-8332-429a-8d31-57cd2682aa57"/* _____End/Id_____ */;
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
veda_fn_id_81bd98198332429a8d3157cd2682aa57();
