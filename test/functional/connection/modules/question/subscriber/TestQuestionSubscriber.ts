import {EventSubscriber} from "../../../../../../src/decorator/listeners/EventSubscriber";
import {EntitySubscriberInterface} from "../../../../../../src/subscriber/EntitySubscriberInterface";
import {InsertEvent} from "../../../../../../src/subscriber/event/InsertEvent";

@EventSubscriber()
export class TestQuestionSubscriber implements EntitySubscriberInterface<any> {
    
    /**
     * Called after entity insertion.
     */
    beforeInsert(event: InsertEvent<any>) {
        console.log(`BEFORE ENTITY INSERTED: `, event.entity);
    }

}