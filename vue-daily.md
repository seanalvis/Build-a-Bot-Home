
https://guides.github.com/features/mastering-markdown/

#20190629

## parsing through an object to find a matching param 5 - Working with route params
```html
<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
import parts from '../data/parts';

export default {
    name: 'PartInfo',
    computed: {
        part() {
            const { partType, id } = this.$route.params;
            return parts[partType].find(part => part.id === +id);
        },
    },
};
</script>
```

## Displaying Filtered/Sorted Results
Sometimes we want to display a filtered or sorted version of an array without actually mutating or resetting the original data. In this case, you can create a computed property that returns the filtered or sorted array.

For example:

```javascript
<li v-for="n in evenNumbers">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

In situations where computed properties are not feasible (e.g. inside nested v-for loops), you can use a method:

```javascript
<li v-for="n in even(numbers)">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```