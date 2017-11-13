import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/* Event handlers for the buttonToggle template
 */
Template.buttonToggle.onCreated(function create() {
    this.on = new ReactiveVar(0);
});

Template.buttonToggle.helpers({
    get() {
        if(Template.instance().on.get() == 0) return "off";
        else return "on";
    }
});

Template.buttonToggle.events({
    'click button': function(event, instance) {
        if(instance.on.get() == 0) instance.on.set(1);
        else instance.on.set(0);
    }
});

/* Event handlers for the slider template
 */
Template.slider.onCreated(function create() {
    this.level = new ReactiveVar(0);
});

Template.slider.helpers({
    get() {
        return Template.instance().level.get();
    }
});

Template.slider.events({
    'change input[type=range]': function(event, instance){
        var sliderValue = event.currentTarget.value;
        instance.level.set(sliderValue);
    }
})
