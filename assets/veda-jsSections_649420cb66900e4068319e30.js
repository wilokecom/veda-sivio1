function veda_fn_58c799c71041494cb10d4a0a14d9f0ff () {
        
  if (window.veda_fn_58c799c71041494cb10d4a0a14d9f0ffCleanup === undefined) {
    window.veda_fn_58c799c71041494cb10d4a0a14d9f0ffCleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_58c799c71041494cb10d4a0a14d9f0ffCleanup.cleanup();

        try {
          const uniqueIds = ["id_5ef9e964-6726-478c-968b-1d5a4ac2f412","id_a64a6719-24fc-44fb-b51c-4ee77e877179","id_d4254253-64c4-4d87-a45f-67a08dc8df1f"];
          uniqueIds.forEach(uniqueId => {
            const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
            containers.forEach(container => {
              if (!container) {
                return;
              }
              veda.plugins.videoCover(container);
              
            });
          });
        } catch(error) {
          console.error(error);
        }
      }
veda_fn_58c799c71041494cb10d4a0a14d9f0ff();