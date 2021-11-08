import { LightningElement } from 'lwc';


export default class MenuChildComponent extends LightningElement {

    _IsAllTopic = false;
    _topicCategoryInput;
    
    showAllTrainingTopics()
    {
         

        // Set  _IsAllTopic to true
        this._IsAllTopic = true;
;
        const showAllTopicevent =  new CustomEvent("searchalltopics",
        {
            detail :{ alltopiclist : this._IsAllTopic }
        });

        //Dispatch the event to parent
        this.dispatchEvent(showAllTopicevent);
    }

    showAllTrainingTopicsByCat()
    {
        alert("Yet to implement !!!! I need to inform that user wants to see search topics by the category and show in another component(parent) !!!!")
            // Get the input as entered by the user from HTML
            this._topicCategoryInput =  this.template.querySelector('lightning-input').value;

            const sendcategoryevent =  new CustomEvent("sendcategory",
        {
            detail :{ categoryEntered : this._topicCategoryInput}
        });

        //Dispatch the event to parent
        this.dispatchEvent(sendcategoryevent);
     
           
    }

}