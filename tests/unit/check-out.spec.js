import { mount } from "@vue/test-utils";
import CheckOutComponent from "@/components/CheckOutComponent.vue";

describe('CheckOutComponent.vue',()=>{
    it('calls removeFromCart mutation when the method is called', async ()=>{
        const mockCartProducts = [
            { id: 1, name: 'Product A', quantity: 2 },
            { id: 2, name: 'Product B', quantity: 1 },
          ];
      
          // Mock the Vuex store
          const mockStore = {
            getters: {
              cartProducts: mockCartProducts,
            },
            commit: jest.fn(),
          };
        const wrapper=mount(CheckOutComponent,{
            global:{
                mocks:{
                $store:mockStore
                }
            }
        });
        await wrapper.vm.removeFromCart({id:1})
        expect(mockStore.commit).toHaveBeenCalledWith('removeFromCart',{id:1})
    })
})