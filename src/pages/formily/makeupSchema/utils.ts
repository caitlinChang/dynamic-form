import { NodeType } from './type';
import { clarificationSchema, conditionSchema, answerSchema } from './schema/index'

export function matchNodeSchema(nodeType: NodeType){
  switch(nodeType){
    case NodeType.Clarification:
      return clarificationSchema;
    case NodeType.Condition:
      return conditionSchema;
    case NodeType.Answer:
      return answerSchema
  }
}