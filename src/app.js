import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  handleToggleClick(evt) {
        this.template.querySelectorAll(".tab-title").forEach((element) => {
            if (!evt.currentTarget.classList.contains("slds-is-active")) {
                element.classList.remove("slds-is-active");
            }
        });

        this.template.querySelectorAll(".tab-content").forEach((element) => {
            if (!evt.currentTarget.classList.contains("tab-active")) {
                element.classList.remove("tab-active");
            }
        });

        evt.currentTarget.classList.toggle("slds-is-active");
        this.template.querySelector("."+evt.currentTarget.dataset.index).classList.add('tab-active');
    }
    
}
