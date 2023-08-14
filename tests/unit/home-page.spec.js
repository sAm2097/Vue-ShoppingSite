import { mount } from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'

//This is the test case for rendering and accessing this.$store,
// simply means that the store data is getting accessed

describe('HomePage.vue',()=>{
    it('renders without errors',()=>{
        const mockState={
            products:[]
        };
        const mockStore={
            state:mockState,
            commit:jest.fn()
        }
        const wrapper=mount(HomePage,{
            global:{
                mocks:{
                    $store:mockStore
                }
            }
        });
        expect(wrapper.exists()).toBe(true)
    })
})

// test for checking whether addToCart is adding to cart
describe('HomePage',()=>{

    // for if condition

    it('adds a product to cart with Lagerbestand > 0', async ()=>{
        const mockProduct={
            id:11,
            title:'Test Product',
            Lagerbestand:3,
            preis:10,
            farbe:'rot',
            kategorie:['A','B','C']
        };
        const mockStore={
            state:{products:[]},
            commit:jest.fn(), //creates a 'mock function'=> keep track of call, return values
        };
        // Here wrapper provides methods for accessing and manipulating of comp's DOM, Props, Data, Methods
        const wrapper=mount(HomePage,{
            global:{
                mocks:{
                    $store:mockStore
                }
            }      
        });
        await wrapper.vm.addToCart(mockProduct)
        expect(mockStore.commit).toHaveBeenCalledWith('addToCart', mockProduct);
        expect(mockProduct.showSuccessAlert).toBe(true);
        expect(mockProduct.showDangerAlert).toBe(false);
    
        await new Promise(resolve => setTimeout(resolve, 2000));
    
        expect(mockProduct.showSuccessAlert).toBe(false);
    });  

    // Checking if product is available or not
    //for else
    it('displays danger alert for product with Lagerbestand === 0', async () => {
        const mockProduct = {
            id:11,
            title:'Test Product',
            Lagerbestand:0,
            preis:10,
            farbe:'rot',
            kategorie:['A','B','C']
        };
        const mockStore = {
            state: {
              products: [mockProduct],
            },
            commit: jest.fn(), //
          };
      
          const wrapper = mount(HomePage, {
            global: {
              mocks: {
                $store: mockStore,
              },
            },
          });
        await wrapper.vm.addToCart(mockProduct);
    
        expect(mockProduct.showDangerAlert).toBe(true);
        expect(mockProduct.showSuccessAlert).toBe(false);
    
        await new Promise(resolve => setTimeout(resolve, 2000));
    
        expect(mockProduct.showDangerAlert).toBe(false);
      });
})



