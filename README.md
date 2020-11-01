<div align = center>
    <h1> MDN-API </h1>
  <i> An Api to search mdn docs. </i>
  <hr>
</div>
<br>

## Installing and Building

1. Clone the project
```sh
git clone https://github.com/Anish-Shobith/mdn-api
```

2. Change directory
```sh
cd mdn-api
```

3. Install packages
```sh
yarn
```

4. Build the project
```sh
yarn build
```

5. Start the project
```sh
yarn start
```

Your api will be hosted on `localhost` and port `3000`.

## Endpoints : 

### `/search`

query parameters

`?q` or `?query` - string*
  - For Query

`array` - boolean
  - To get more than one result

### Examples :
1 . `host/search?q=Map`

Response:
```json
{
  "title": "Map",
  "slug": "Web/JavaScript/Reference/Global_Objects/Map",
  "locale": "en-US",
  "excerpt": "The Map object holds key-value pairs and remembers the original insertion order of the keys.",
  "diff": 1
}
```

2. `host/search/?q=Map&array=true`

Response:
```json
[
  {
    "title": "Map",
    "slug": "Web/JavaScript/Reference/Global_Objects/Map",
    "locale": "en-US",
    "excerpt": "The Map object holds key-value pairs and remembers the original insertion order of the keys.",
    "diff": 1
  },
  {
    "title": "<map>",
    "slug": "Web/HTML/Element/map",
    "locale": "en-US",
    "excerpt": "The HTML map element is used with area elements to define an image map (a clickable link area).",
    "diff": 0.6666666666666666
  },
  {
    "title": "WeakMap",
    "slug": "Web/JavaScript/Reference/Global_Objects/WeakMap",
    "locale": "en-US",
    "excerpt": "The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.",
    "diff": 0.5
  },
  {
    "title": "SourceMap",
    "slug": "Web/HTTP/Headers/SourceMap",
    "locale": "en-US",
    "excerpt": "The SourceMap HTTP response header links generated code to a source map, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.",
    "diff": 0.4
  },
  {
    "title": "DOMStringMap",
    "slug": "Web/API/DOMStringMap",
    "locale": "en-US",
    "excerpt": "The DOMStringMap interface is used for the HTMLElement.dataset attribute, to represent data for custom attributes added to elements.",
    "diff": 0.3076923076923077
  },
  {
    "title": "MIDIOutputMap",
    "slug": "Web/API/MIDIOutputMap",
    "locale": "en-US",
    "excerpt": "The MIDIOutputMap read-only interface of the Web MIDI API provides a Map-like interface to the currently available MIDI output ports. Although it works like a map, because it is read-only, it does not contain clear(), delete(), or set() functions.",
    "diff": 0.2857142857142857
  },
  {
    "title": "Gamepad.mapping",
    "slug": "Web/API/Gamepad/mapping",
    "locale": "en-US",
    "excerpt": "The Gamepad.mapping property of the Gamepad interface returns a string indicating whether the browser has remapped the controls on the device to a known layout.",
    "diff": 0.25
  },
  {
    "title": "Map() constructor",
    "slug": "Web/JavaScript/Reference/Global_Objects/Map/Map",
    "locale": "en-US",
    "excerpt": "The Map() constructor creates Map objects.",
    "diff": 0.23529411764705882
  },
  {
    "title": "CSS Object Model (CSSOM)",
    "slug": "Glossary/CSSOM",
    "locale": "en-US",
    "excerpt": "The CSS Object Model (CSSOM) is a map of all CSS selectors and relevant properties for each selector in the form of a tree, with a root node, sibling, descendant, child, and other relationship. The CSSOM is very similar to the Document Object Model (DOM). Both of them are part of the critical rendering path which is a series of steps that must happen to properly render a website.",
    "diff": 0
  },
  {
    "title": "Style Editor",
    "slug": "Tools/Style_Editor",
    "locale": "en-US",
    "excerpt": "The Style Editor enables you to:",
    "diff": 0
  }
]
```