import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AllChains from '@/components/AllChains.vue';

describe('Allchains.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AllChains, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
