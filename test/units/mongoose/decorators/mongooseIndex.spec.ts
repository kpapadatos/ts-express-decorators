import {MongooseIndex} from "../../../../packages/mongoose/decorators/mongooseIndex";
import * as mod from "../../../../packages/mongoose/utils/schemaOptions";
import {Sinon} from "../../../tools";

describe("@MongooseIndex()", () => {
  class Test {}

  before(() => {
    this.applySchemaOptionsStub = Sinon.stub(mod, "applySchemaOptions");
    this.fields = {};
    MongooseIndex("fields" as any, "options" as any)(Test);
  });

  after(() => {
    this.applySchemaOptionsStub.restore();
  });

  it("should call applySchemaOptions", () => {
    this.applySchemaOptionsStub.should.have.been.calledWithExactly(Test, {
      indexes: [
        {
          fields: "fields",
          options: "options"
        }
      ]
    });
  });
});
