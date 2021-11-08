import { LightningElement, wire} from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';

export default class TrainingTopicList extends LightningElement {
    numbers=[1,2,3,4,5,6];
    SFTopicsArr=[
        {topicName: "Javascript Fundamentals", TopicCatogery: "Java Script" },
        {topicName: "JS Modules", TopicCatogery: "Java Script"},
        {topicName: "Triggers", TopicCatogery: "Apex"},
    ];
    recordExists = this.SFTopicsArr.length > 0 ? true : false;
    SFAllTrainingTopics;
    SFTopicsList;
    //method 1:calling apex method through wire and storing output in a property
    @wire(fetchSFTrainingTopics)
    SFTopicsList;
    //method 2:calling apex method through wire and storing output in a function
    @wire(fetchSFTrainingTopics)
    loadTrainingTopics({data,error})
    {
        this.SFAllTrainingTopics=data;
    }

    connectedCallback()
    {
        console.log("SFTopicList::"+this.SFTopicsList);
        console.log("SFTopicList.data::"+this.SFTopicsList.data);
    }
    renderedCallback()
    {
        console.log("SFTopicList::"+this.SFTopicsList);
        console.log("SFTopicList.data::"+this.SFTopicsList.data); 
    }
    SFTopicsArrConverted=JSON.stringify(this.SFTopicsArr);
    }