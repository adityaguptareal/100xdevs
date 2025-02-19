# Steps to Add Recoil

### Step 1. Wrap your app with Recoil Root

### Step 2. create a store where you can globall store all the atoms or state and selector.

### Step 3. Create an atom and export it

```
import { atom, selector } from "recoil";
export const counterAtom=atom({
    key:"counterAtom",
    default:0
})
```

### Step 4. Now if you want to display the value (atom) and update its value then use `useSetRecoilState` to update the value or `useRecoilValue` to display the value just like `useState` hook in react

```
function Counter() {
const count = useRecoilValue(counterAtom)
return (
 <div>{count}</div>
)
  }

function ButtonCounter() {
const setCount = useSetRecoilState(counterAtom)
return (
<div>
<button onClick={() => { setCount((c) => c + 2) }}>Increase</button>

<button onClick={() => { setCount((c) => c - 1) }}>Decrease</button>
</div>
    )
  }
```
### Step 5. Selectors are bascially derived state which are state obetained from atom and return tru or false value.

```
export const evenSelector=selector({
    key:"evenSelector",
    get:({get})=>{
        const count=get(counterAtom)
        const isEven=(count%2==0)
        return isEven
    }
})
```