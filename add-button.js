AFRAME.registerComponent('add-button', {
    init: function() {
        const addButton = document.getElementById('addbutton')
        const ground = document.getElementById('ground')
        const addObject = () => {
            ground.addEventListener('click', event => {
            const newElement = document.createElement('a-entity')
            
            const touchPoint = event.detail.intersection.point
            newElement.setAttribute('position', touchPoint)
            newElement.setAttribute('visible', 'false')
            newElement.setAttribute('scale', '0.0001 0.0001 0.0001')
            newElement.setAttribute('obj-model', '#sandCastleModel')
            this.el.sceneEl.appendChild(newElement)
            
            
            newElement.addEventListener('model-loaded', () => {
              // Once the model is loaded, we are ready to show it popping in using an animation
              newElement.setAttribute('visible', 'true')
              newElement.setAttribute('animation', {
                property: 'scale',
                to: '0.01 0.01 0.01',
                easing: 'easeOutElastic',
                dur: 800,
              })
            })
          })
        }
                 
        addButton.addEventListener('click',addObject);
        // addButton.removeEventListener('click',addObject);
    }
 })
