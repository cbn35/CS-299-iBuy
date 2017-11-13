import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
 
Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
  ],
});

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
