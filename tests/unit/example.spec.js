import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })

  it('increases count when button is clicked', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.counter).to.equal(0)
    const button = wrapper.find('#increment')
    button.trigger('click')
    expect(wrapper.vm.counter).to.equal(1)
  })

  it('decreases count when button is clicked', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.counter).to.equal(0)
    const button = wrapper.find('#decrement')
    button.trigger('click')
    expect(wrapper.vm.counter).to.equal(-1)
  })
})