import Title from '@/components/Title.vue';
import { shallowMount } from '@vue/test-utils';

describe('Title.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Title, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
