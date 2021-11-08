import { LightningElement } from 'lwc';

import showAllTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';
import fetchTrainingTopicsByCategory from '@salesforce/apex/SFTopicHelper.getSFTrainingTopicsByCategory';

export default class TopicDetailParent extends LightningElement {

_SFTopics;
topicsByCat;

//Event handler for event received from child
handleShowTopicsAllEvent(event)
{

//Read the values came from child compoent
const allTopiclst = event.detail.alltopiclist;
alert('allTopiclst:' + allTopiclst);
showAllTrainingTopics()
.then((result) => {this._SFTopics = result})
.catch((error) => {alert("Error occured");
});

}

handleShowCategoryEvent(event) {
// Make a call to APEX method imperatively by passing category input

const catInput=event.detail.categoryEntered;
alert('Category Entered:' + catInput);

fetchTrainingTopicsByCategory({strCat:catInput})
.then((result) => {this.topicsByCat = result})
.catch((error) => {alert("Error occured")});

alert('Category Done:' + catInput);
}

}