import {QAEngineerTestPom} from '../pages/QAEngineerTest.pom';
import * as data from './qa.json';
import {test as baseTest} from './MetamaskFixture';
  const test = baseTest.extend<{
    qAEngineerTestFixture: QAEngineerTestPom;
  }>({
    qAEngineerTestFixture: async ({metamask},use) => {
        await metamask.page.goto(data.baseUrl);
        await metamask.page.waitForLoadState();
        const qAEngineerTestFixture = new QAEngineerTestPom(metamask.page)
        await use(qAEngineerTestFixture)
    },
  })
  export default test;
  export const expect = test.expect;