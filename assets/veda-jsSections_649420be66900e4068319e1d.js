function veda_fn_a4538b5825364e8d90fbc2911ec90d28 () {
        
  if (window.veda_fn_a4538b5825364e8d90fbc2911ec90d28Cleanup === undefined) {
    window.veda_fn_a4538b5825364e8d90fbc2911ec90d28Cleanup = {
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
  window.veda_fn_a4538b5825364e8d90fbc2911ec90d28Cleanup.cleanup();

        try {
          const uniqueIds = ["id_aea1351a-fd00-4ac0-a150-56e815948bd9","id_7553dfc5-8c20-4a74-b6c8-a6586f1bf495"];
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
veda_fn_a4538b5825364e8d90fbc2911ec90d28();