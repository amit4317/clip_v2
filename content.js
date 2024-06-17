(function() {
    const sidebar = document.createElement('div');
    sidebar.id = 'terminalSidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '20%';
    sidebar.style.right = '0';
    sidebar.style.width = '600px';
    sidebar.style.height = '100%';
    sidebar.style.backgroundColor = '#f4f4f4';
    sidebar.style.borderLeft = '1px solid #ccc';
    sidebar.style.zIndex = '1000';
    sidebar.style.overflow = 'auto';
    // sidebar.style.padding = '10px';
    sidebar.style.display = 'none';
    document.body.appendChild(sidebar);
  
    window.addEventListener('message', event => {
      if (event.data.type === 'COMMAND_OUTPUT') {
        sidebar.style.display = 'flex';
        const pre = document.createElement('pre');
        pre.textContent = event.data.output;
        sidebar.appendChild(pre);
      }
    });
  })();
  