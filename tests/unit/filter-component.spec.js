import { mount } from '@vue/test-utils'
import FilterComponent from "@/components/FilterComponent.vue";
// import store from '@/store/index.js';

// checking for initial render
describe('FilterComponent',()=>{
    it('renders correctly',()=>{
        const wrapper=mount(FilterComponent)
        expect(wrapper.exists()).toBe(true)
    })
})

// testing whether the filters are applied when clicked from template

describe('FilterComponent', () => {
    it('applies filters when applyFilter is called', async () => {
      const productsMock = [
        { id: 1, kategorie: ['A'], farbe: 'Rot', preis: 10, Lagerbestand: 5 },
        { id: 2, kategorie: ['B'], farbe: 'Grün', preis: 20, Lagerbestand: 10 },
        { id: 3, kategorie: ['C'], farbe: 'Blau', preis: 15, Lagerbestand: 8 }
      ];
  
      // Set initial store state and mock mutations
      const mockStore = {
        state: { products: productsMock, cart: [] },
        commit: jest.fn(),
        mutations: {
          resetProducts: jest.fn(),
          updateProducts: jest.fn(),
          updateCartFromLocalStorage: jest.fn()
        }
      };
  
      const wrapper = mount(FilterComponent, {
        global: {
          mocks: {
            $store: mockStore
          }
        }
      });
  
      await wrapper.setData({
        selectedCategory: 'A',
        selectedColor: 'Rot',
        selectedSort: '1'
      });
  
      const applyButton = wrapper.find('.btn-primary');
      await applyButton.trigger('click');
  
      expect(mockStore.commit).toHaveBeenCalledWith('resetProducts');
     
    });
  });
  