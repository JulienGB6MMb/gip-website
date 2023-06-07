window.onload = function () {
    const helpers = (function () {
      function getDOMElements(DOMSelectors) {
        let DOMElements = {};
        for (let selector in DOMSelectors) {
          if (DOMSelectors.hasOwnProperty(selector)) {
            DOMElements[selector] = document.querySelector(
              DOMSelectors[selector]
            );
          }
        }
        return DOMElements;
      }
      return {
        getDOMElements
      };
    })();
  
    const modal = (function () {
      const state = {
        counter: 0,
        intervalID: 0
      };
      let CONSTANTS = {
        ACTIVE_CLASS_NAME: "active",
        TIMER: 1500,
        TRANSITION: "all .3s ease-out"
      };
      function addConstant(key, value) {
        CONSTANTS[key] = value;
      }
  
      return {
        state,
        CONSTANTS,
        addConstant
      };
    })();
  
    const view = (function (helpers) {
      const DOMSelectors = {
        carouselInnerSlider: ".content_inner_slider",
        carouselImages: ".content_inner_slider > img"
      };
      const DOMElements = helpers.getDOMElements(DOMSelectors);
      const CAROUSEL_IMAGES = [
        ...document.querySelectorAll(DOMSelectors.carouselImages)
      ];
      function moveSliderToIndex(IMAGE_SIZE, index) {
        DOMElements.carouselInnerSlider.style.transform = `translateX(-${
          IMAGE_SIZE * index
        }px)`;
      }
      function addClassToIndex(className, index) {
        CAROUSEL_IMAGES[index].classList.add(className);
      }
      function removeClassToIndex(className, index) {
        CAROUSEL_IMAGES[index].classList.remove(className);
      }
      function addBackGroundToCurrentIndex(index) {
        CAROUSEL_IMAGES[index].style.background = "#000";
      }
      function removeBackGroundToCurrentIndex(index) {
        CAROUSEL_IMAGES[index].style.background = "transparent";
      }
      function setTransition(element, transition) {
        element.style.transition = `${transition}`;
      }
      return {
        DOMSelectors,
        moveSliderToIndex,
        addClassToIndex,
        removeClassToIndex,
        addBackGroundToCurrentIndex,
        removeBackGroundToCurrentIndex,
        setTransition
      };
    })(helpers);
  
    const controller = (function (modal, view, helpers) {
      const DOMSelectors = view.DOMSelectors;
      const DOMElements = helpers.getDOMElements(DOMSelectors);
      function initApp() {
        const imageSize = DOMElements.carouselInnerSlider.clientWidth;
        const imagesCount =
          [...document.querySelectorAll(DOMSelectors.carouselImages)].length - 1;
        modal.addConstant("IMAGE_SIZE", imageSize);
        modal.addConstant("TOTAL_IMAGES", imagesCount);
        view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
        handleAdding();
        modal.state.intervalID = setInterval(() => {
          handleNextImage();
        }, modal.CONSTANTS.TIMER);
      }
      function removeEventListeners() {
        clearInterval(modal.state.intervalID);
      }
      function handleNextImage() {
        handleRemove();
        if (modal.state.counter === modal.CONSTANTS.TOTAL_IMAGES) {
          modal.state.counter = -1;
        }
        modal.state.counter += 1;
        handleAdding();
        view.moveSliderToIndex(modal.CONSTANTS.IMAGE_SIZE, modal.state.counter);
      }
      function handleRemove() {
        view.removeClassToIndex(
          modal.CONSTANTS.ACTIVE_CLASS_NAME,
          modal.state.counter
        );
        view.removeBackGroundToCurrentIndex(modal.state.counter);
      }
      function handleAdding() {
        view.addClassToIndex(
          modal.CONSTANTS.ACTIVE_CLASS_NAME,
          modal.state.counter
        );
        view.addBackGroundToCurrentIndex(modal.state.counter);
      }
      DOMElements.carouselInnerSlider.addEventListener(
        "transitionstart",
        removeEventListeners
      );
      DOMElements.carouselInnerSlider.addEventListener("transitionend", initApp);
      view.setTransition(
        DOMElements.carouselInnerSlider,
        modal.CONSTANTS.TRANSITION
      );
      return {
        initApp,
        removeEventListeners
      };
    })(modal, view, helpers);
  
    controller.initApp();
  
    window.addEventListener("resize", () => {
      controller.removeEventListeners();
      controller.initApp();
    });
  };