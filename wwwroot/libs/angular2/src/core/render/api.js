'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exceptions_1 = require('angular2/src/facade/exceptions');
/**
 * Represents an Angular ProtoView in the Rendering Context.
 *
 * When you implement a custom {@link Renderer}, `RenderProtoViewRef` specifies what Render View
 * your renderer should create.
 *
 * `RenderProtoViewRef` is a counterpart to {@link ProtoViewRef} available in the Application
 * Context. But unlike `ProtoViewRef`, `RenderProtoViewRef` contains all static nested Proto Views
 * that are recursively merged into a single Render Proto View.

 *
 * <!-- TODO: this is created by Renderer#createProtoView in the new compiler -->
 */
var RenderProtoViewRef = (function () {
    function RenderProtoViewRef() {
    }
    return RenderProtoViewRef;
})();
exports.RenderProtoViewRef = RenderProtoViewRef;
/**
 * Represents a list of sibling Nodes that can be moved by the {@link Renderer} independently of
 * other Render Fragments.
 *
 * Any {@link RenderViewRef} has one Render Fragment.
 *
 * Additionally any View with an Embedded View that contains a {@link NgContentAst View Projection}
 * results in additional Render Fragment.
 */
/*
  <div>foo</div>
  {{bar}}


  <div>foo</div> -> view 1 / fragment 1
  <ul>
    <template ngFor>
      <li>{{fg}}</li> -> view 2 / fragment 1
    </template>
  </ul>
  {{bar}}


  <div>foo</div> -> view 1 / fragment 1
  <ul>
    <template ngIf>
      <li><ng-content></></li> -> view 1 / fragment 2
    </template>
    <template ngFor>
      <li><ng-content></></li> ->
      <li></li>                -> view 1 / fragment 2 + view 2 / fragment 1..n-1
    </template>
  </ul>
  {{bar}}
 */
// TODO(i): refactor into an interface
var RenderFragmentRef = (function () {
    function RenderFragmentRef() {
    }
    return RenderFragmentRef;
})();
exports.RenderFragmentRef = RenderFragmentRef;
/**
 * Represents an Angular View in the Rendering Context.
 *
 * `RenderViewRef` specifies to the {@link Renderer} what View to update or destroy.
 *
 * Unlike a {@link ViewRef} available in the Application Context, Render View contains all the
 * static Component Views that have been recursively merged into a single Render View.
 *
 * Each `RenderViewRef` contains one or more {@link RenderFragmentRef Render Fragments}, these
 * Fragments are created, hydrated, dehydrated and destroyed as a single unit together with the
 * View.
 */
// TODO(i): refactor into an interface
var RenderViewRef = (function () {
    function RenderViewRef() {
    }
    return RenderViewRef;
})();
exports.RenderViewRef = RenderViewRef;
/**
 * Abstract base class for commands to the Angular renderer, using the visitor pattern.
 */
var RenderTemplateCmd = (function () {
    function RenderTemplateCmd() {
    }
    return RenderTemplateCmd;
})();
exports.RenderTemplateCmd = RenderTemplateCmd;
/**
 * Command to begin rendering.
 */
var RenderBeginCmd = (function (_super) {
    __extends(RenderBeginCmd, _super);
    function RenderBeginCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderBeginCmd.prototype, "ngContentIndex", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderBeginCmd.prototype, "isBound", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderBeginCmd;
})(RenderTemplateCmd);
exports.RenderBeginCmd = RenderBeginCmd;
/**
 * Command to render text.
 */
var RenderTextCmd = (function (_super) {
    __extends(RenderTextCmd, _super);
    function RenderTextCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderTextCmd.prototype, "value", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderTextCmd;
})(RenderBeginCmd);
exports.RenderTextCmd = RenderTextCmd;
/**
 * Command to render projected content.
 */
var RenderNgContentCmd = (function (_super) {
    __extends(RenderNgContentCmd, _super);
    function RenderNgContentCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderNgContentCmd.prototype, "index", {
        // The index of this NgContent element
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderNgContentCmd.prototype, "ngContentIndex", {
        // The index of the NgContent element into which this
        // NgContent element should be projected (if any)
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderNgContentCmd;
})(RenderTemplateCmd);
exports.RenderNgContentCmd = RenderNgContentCmd;
/**
 * Command to begin rendering an element.
 */
var RenderBeginElementCmd = (function (_super) {
    __extends(RenderBeginElementCmd, _super);
    function RenderBeginElementCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderBeginElementCmd.prototype, "name", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderBeginElementCmd.prototype, "attrNameAndValues", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderBeginElementCmd.prototype, "eventTargetAndNames", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderBeginElementCmd;
})(RenderBeginCmd);
exports.RenderBeginElementCmd = RenderBeginElementCmd;
/**
 * Command to begin rendering a component.
 */
var RenderBeginComponentCmd = (function (_super) {
    __extends(RenderBeginComponentCmd, _super);
    function RenderBeginComponentCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderBeginComponentCmd.prototype, "templateId", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderBeginComponentCmd;
})(RenderBeginElementCmd);
exports.RenderBeginComponentCmd = RenderBeginComponentCmd;
/**
 * Command to render a component's template.
 */
var RenderEmbeddedTemplateCmd = (function (_super) {
    __extends(RenderEmbeddedTemplateCmd, _super);
    function RenderEmbeddedTemplateCmd() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(RenderEmbeddedTemplateCmd.prototype, "isMerged", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(RenderEmbeddedTemplateCmd.prototype, "children", {
        get: function () { return exceptions_1.unimplemented(); },
        enumerable: true,
        configurable: true
    });
    ;
    return RenderEmbeddedTemplateCmd;
})(RenderBeginElementCmd);
exports.RenderEmbeddedTemplateCmd = RenderEmbeddedTemplateCmd;
/**
 * Container class produced by a {@link Renderer} when creating a Render View.
 *
 * An instance of `RenderViewWithFragments` contains a {@link RenderViewRef} and an array of
 * {@link RenderFragmentRef}s belonging to this Render View.
 */
// TODO(i): refactor this by RenderViewWithFragments and adding fragments directly to RenderViewRef
var RenderViewWithFragments = (function () {
    function RenderViewWithFragments(
        /**
         * Reference to the {@link RenderViewRef}.
         */
        viewRef, 
        /**
         * Array of {@link RenderFragmentRef}s ordered in the depth-first order.
         */
        fragmentRefs) {
        this.viewRef = viewRef;
        this.fragmentRefs = fragmentRefs;
    }
    return RenderViewWithFragments;
})();
exports.RenderViewWithFragments = RenderViewWithFragments;
/**
 * Template for rendering a component, including commands and styles.
 */
var RenderComponentTemplate = (function () {
    function RenderComponentTemplate(id, shortId, encapsulation, commands, styles) {
        this.id = id;
        this.shortId = shortId;
        this.encapsulation = encapsulation;
        this.commands = commands;
        this.styles = styles;
    }
    return RenderComponentTemplate;
})();
exports.RenderComponentTemplate = RenderComponentTemplate;
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 */
var Renderer = (function () {
    function Renderer() {
    }
    return Renderer;
})();
exports.Renderer = Renderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaS50cyJdLCJuYW1lcyI6WyJSZW5kZXJQcm90b1ZpZXdSZWYiLCJSZW5kZXJQcm90b1ZpZXdSZWYuY29uc3RydWN0b3IiLCJSZW5kZXJGcmFnbWVudFJlZiIsIlJlbmRlckZyYWdtZW50UmVmLmNvbnN0cnVjdG9yIiwiUmVuZGVyVmlld1JlZiIsIlJlbmRlclZpZXdSZWYuY29uc3RydWN0b3IiLCJSZW5kZXJUZW1wbGF0ZUNtZCIsIlJlbmRlclRlbXBsYXRlQ21kLmNvbnN0cnVjdG9yIiwiUmVuZGVyQmVnaW5DbWQiLCJSZW5kZXJCZWdpbkNtZC5jb25zdHJ1Y3RvciIsIlJlbmRlckJlZ2luQ21kLm5nQ29udGVudEluZGV4IiwiUmVuZGVyQmVnaW5DbWQuaXNCb3VuZCIsIlJlbmRlclRleHRDbWQiLCJSZW5kZXJUZXh0Q21kLmNvbnN0cnVjdG9yIiwiUmVuZGVyVGV4dENtZC52YWx1ZSIsIlJlbmRlck5nQ29udGVudENtZCIsIlJlbmRlck5nQ29udGVudENtZC5jb25zdHJ1Y3RvciIsIlJlbmRlck5nQ29udGVudENtZC5pbmRleCIsIlJlbmRlck5nQ29udGVudENtZC5uZ0NvbnRlbnRJbmRleCIsIlJlbmRlckJlZ2luRWxlbWVudENtZCIsIlJlbmRlckJlZ2luRWxlbWVudENtZC5jb25zdHJ1Y3RvciIsIlJlbmRlckJlZ2luRWxlbWVudENtZC5uYW1lIiwiUmVuZGVyQmVnaW5FbGVtZW50Q21kLmF0dHJOYW1lQW5kVmFsdWVzIiwiUmVuZGVyQmVnaW5FbGVtZW50Q21kLmV2ZW50VGFyZ2V0QW5kTmFtZXMiLCJSZW5kZXJCZWdpbkNvbXBvbmVudENtZCIsIlJlbmRlckJlZ2luQ29tcG9uZW50Q21kLmNvbnN0cnVjdG9yIiwiUmVuZGVyQmVnaW5Db21wb25lbnRDbWQudGVtcGxhdGVJZCIsIlJlbmRlckVtYmVkZGVkVGVtcGxhdGVDbWQiLCJSZW5kZXJFbWJlZGRlZFRlbXBsYXRlQ21kLmNvbnN0cnVjdG9yIiwiUmVuZGVyRW1iZWRkZWRUZW1wbGF0ZUNtZC5pc01lcmdlZCIsIlJlbmRlckVtYmVkZGVkVGVtcGxhdGVDbWQuY2hpbGRyZW4iLCJSZW5kZXJWaWV3V2l0aEZyYWdtZW50cyIsIlJlbmRlclZpZXdXaXRoRnJhZ21lbnRzLmNvbnN0cnVjdG9yIiwiUmVuZGVyQ29tcG9uZW50VGVtcGxhdGUiLCJSZW5kZXJDb21wb25lbnRUZW1wbGF0ZS5jb25zdHJ1Y3RvciIsIlJlbmRlcmVyIiwiUmVuZGVyZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFJN0Q7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0g7SUFBQUE7SUFBaUNDLENBQUNBO0lBQURELHlCQUFDQTtBQUFEQSxDQUFDQSxBQUFsQyxJQUFrQztBQUFyQiwwQkFBa0IscUJBQUcsQ0FBQTtBQUVsQzs7Ozs7Ozs7R0FRRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBQ0gsc0NBQXNDO0FBQ3RDO0lBQUFFO0lBQWdDQyxDQUFDQTtJQUFERCx3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFBakMsSUFBaUM7QUFBcEIseUJBQWlCLG9CQUFHLENBQUE7QUFHakM7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxzQ0FBc0M7QUFDdEM7SUFBQUU7SUFBNEJDLENBQUNBO0lBQURELG9CQUFDQTtBQUFEQSxDQUFDQSxBQUE3QixJQUE2QjtBQUFoQixxQkFBYSxnQkFBRyxDQUFBO0FBRTdCOztHQUVHO0FBQ0g7SUFBQUU7SUFFQUMsQ0FBQ0E7SUFBREQsd0JBQUNBO0FBQURBLENBQUNBLEFBRkQsSUFFQztBQUZxQix5QkFBaUIsb0JBRXRDLENBQUE7QUFFRDs7R0FFRztBQUNIO0lBQTZDRSxrQ0FBaUJBO0lBQTlEQTtRQUE2Q0MsOEJBQWlCQTtJQUc5REEsQ0FBQ0E7SUFGQ0Qsc0JBQUlBLDBDQUFjQTthQUFsQkEsY0FBK0JFLE1BQU1BLENBQUNBLDBC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QWlDQTtRQUpqQ0MsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBZUE7UUFJdEJBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFxQkE7SUFBR0EsQ0FBQ0E7SUFDbERELDhCQUFDQTtBQUFEQSxDQUFDQSxBQVZELElBVUM7QUFWWSwrQkFBdUIsMEJBVW5DLENBQUE7QUEwQkQ7O0dBRUc7QUFDSDtJQUNFRSxpQ0FBbUJBLEVBQVVBLEVBQVNBLE9BQWVBLEVBQVNBLGFBQWdDQSxFQUMzRUEsUUFBNkJBLEVBQVNBLE1BQWdCQTtRQUR0REMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBUUE7UUFBU0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFBU0Esa0JBQWFBLEdBQWJBLGFBQWFBLENBQW1CQTtRQUMzRUEsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBcUJBO1FBQVNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVVBO0lBQUdBLENBQUNBO0lBQy9FRCw4QkFBQ0E7QUFBREEsQ0FBQ0EsQUFIRCxJQUdDO0FBSFksK0JBQXVCLDBCQUduQyxDQUFBO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSDtJQUFBRTtJQStKQUMsQ0FBQ0E7SUFBREQsZUFBQ0E7QUFBREEsQ0FBQ0EsQUEvSkQsSUErSkM7QUEvSnFCLGdCQUFRLFdBK0o3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1bmltcGxlbWVudGVkfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtNYXB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBBbmd1bGFyIFByb3RvVmlldyBpbiB0aGUgUmVuZGVyaW5nIENvbnRleHQuXG4gKlxuICogV2hlbiB5b3UgaW1wbGVtZW50IGEgY3VzdG9tIHtAbGluayBSZW5kZXJlcn0sIGBSZW5kZXJQcm90b1ZpZXdSZWZgIHNwZWNpZmllcyB3aGF0IFJlbmRlciBWaWV3XG4gKiB5b3VyIHJlbmRlcmVyIHNob3VsZCBjcmVhdGUuXG4gKlxuICogYFJlbmRlclByb3RvVmlld1JlZmAgaXMgYSBjb3VudGVycGFydCB0byB7QGxpbmsgUHJvdG9WaWV3UmVmfSBhdmFpbGFibGUgaW4gdGhlIEFwcGxpY2F0aW9uXG4gKiBDb250ZXh0LiBCdXQgdW5saWtlIGBQcm90b1ZpZXdSZWZgLCBgUmVuZGVyUHJvdG9WaWV3UmVmYCBjb250YWlucyBhbGwgc3RhdGljIG5lc3RlZCBQcm90byBWaWV3c1xuICogdGhhdCBhcmUgcmVjdXJzaXZlbHkgbWVyZ2VkIGludG8gYSBzaW5nbGUgUmVuZGVyIFByb3RvIFZpZXcuXG5cbiAqXG4gKiA8IS0tIFRPRE86IHRoaXMgaXMgY3JlYXRlZCBieSBSZW5kZXJlciNjcmVhdGVQcm90b1ZpZXcgaW4gdGhlIG5ldyBjb21waWxlciAtLT5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlbmRlclByb3RvVmlld1JlZiB7fVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBsaXN0IG9mIHNpYmxpbmcgTm9kZXMgdGhhdCBjYW4gYmUgbW92ZWQgYnkgdGhlIHtAbGluayBSZW5kZXJlcn0gaW5kZXBlbmRlbnRseSBvZlxuICogb3RoZXIgUmVuZGVyIEZyYWdtZW50cy5cbiAqXG4gKiBBbnkge0BsaW5rIFJlbmRlclZpZXdSZWZ9IGhhcyBvbmUgUmVuZGVyIEZyYWdtZW50LlxuICpcbiAqIEFkZGl0aW9uYWxseSBhbnkgVmlldyB3aXRoIGFuIEVtYmVkZGVkIFZpZXcgdGhhdCBjb250YWlucyBhIHtAbGluayBOZ0NvbnRlbnRBc3QgVmlldyBQcm9qZWN0aW9ufVxuICogcmVzdWx0cyBpbiBhZGRpdGlvbmFsIFJlbmRlciBGcmFnbWVudC5cbiAqL1xuLypcbiAgPGRpdj5mb288L2Rpdj5cbiAge3tiYXJ9fVxuXG5cbiAgPGRpdj5mb288L2Rpdj4gLT4gdmlldyAxIC8gZnJhZ21lbnQgMVxuICA8dWw+XG4gICAgPHRlbXBsYXRlIG5nRm9yPlxuICAgICAgPGxpPnt7Zmd9fTwvbGk+IC0+IHZpZXcgMiAvIGZyYWdtZW50IDFcbiAgICA8L3RlbXBsYXRlPlxuICA8L3VsPlxuICB7e2Jhcn19XG5cblxuICA8ZGl2PmZvbzwvZGl2PiAtPiB2aWV3IDEgLyBmcmFnbWVudCAxXG4gIDx1bD5cbiAgICA8dGVtcGxhdGUgbmdJZj5cbiAgICAgIDxsaT48bmctY29udGVudD48Lz48L2xpPiAtPiB2aWV3IDEgLyBmcmFnbWVudCAyXG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgbmdGb3I+XG4gICAgICA8bGk+PG5nLWNvbnRlbnQ+PC8+PC9saT4gLT5cbiAgICAgIDxsaT48L2xpPiAgICAgICAgICAgICAgICAtPiB2aWV3IDEgLyBmcmFnbWVudCAyICsgdmlldyAyIC8gZnJhZ21lbnQgMS4ubi0xXG4gICAgPC90ZW1wbGF0ZT5cbiAgPC91bD5cbiAge3tiYXJ9fVxuICovXG4vLyBUT0RPKGkpOiByZWZhY3RvciBpbnRvIGFuIGludGVyZmFjZVxuZXhwb3J0IGNsYXNzIFJlbmRlckZyYWdtZW50UmVmIHt9XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEFuZ3VsYXIgVmlldyBpbiB0aGUgUmVuZGVyaW5nIENvbnRleHQuXG4gKlxuICogYFJlbmRlclZpZXdSZWZgIHNwZWNpZmllcyB0byB0aGUge0BsaW5rIFJlbmRlcmVyfSB3aGF0IFZpZXcgdG8gdXBkYXRlIG9yIGRlc3Ryb3kuXG4gKlxuICogVW5saWtlIGEge0BsaW5rIFZpZXdSZWZ9IGF2YWlsYWJsZSBpbiB0aGUgQXBwbGljYXRpb24gQ29udGV4dCwgUmVuZGVyIFZpZXcgY29udGFpbnMgYWxsIHRoZVxuICogc3RhdGljIENvbXBvbmVudCBWaWV3cyB0aGF0IGhhdmUgYmVlbiByZWN1cnNpdmVseSBtZXJnZWQgaW50byBhIHNpbmdsZSBSZW5kZXIgVmlldy5cbiAqXG4gKiBFYWNoIGBSZW5kZXJWaWV3UmVmYCBjb250YWlucyBvbmUgb3IgbW9yZSB7QGxpbmsgUmVuZGVyRnJhZ21lbnRSZWYgUmVuZGVyIEZyYWdtZW50c30sIHRoZXNlXG4gKiBGcmFnbWVudHMgYXJlIGNyZWF0ZWQsIGh5ZHJhdGVkLCBkZWh5ZHJhdGVkIGFuZCBkZXN0cm95ZWQgYXMgYSBzaW5nbGUgdW5pdCB0b2dldGhlciB3aXRoIHRoZVxuICogVmlldy5cbiAqL1xuLy8gVE9ETyhpKTogcmVmYWN0b3IgaW50byBhbiBpbnRlcmZhY2VcbmV4cG9ydCBjbGFzcyBSZW5kZXJWaWV3UmVmIHt9XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgY29tbWFuZHMgdG8gdGhlIEFuZ3VsYXIgcmVuZGVyZXIsIHVzaW5nIHRoZSB2aXNpdG9yIHBhdHRlcm4uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJUZW1wbGF0ZUNtZCB7XG4gIGFic3RyYWN0IHZpc2l0KHZpc2l0b3I6IFJlbmRlckNvbW1hbmRWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbi8qKlxuICogQ29tbWFuZCB0byBiZWdpbiByZW5kZXJpbmcuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJCZWdpbkNtZCBleHRlbmRzIFJlbmRlclRlbXBsYXRlQ21kIHtcbiAgZ2V0IG5nQ29udGVudEluZGV4KCk6IG51bWJlciB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH07XG4gIGdldCBpc0JvdW5kKCk6IGJvb2xlYW4geyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9O1xufVxuXG4vKipcbiAqIENvbW1hbmQgdG8gcmVuZGVyIHRleHQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJUZXh0Q21kIGV4dGVuZHMgUmVuZGVyQmVnaW5DbWQge1xuICBnZXQgdmFsdWUoKTogc3RyaW5nIHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfTtcbn1cblxuLyoqXG4gKiBDb21tYW5kIHRvIHJlbmRlciBwcm9qZWN0ZWQgY29udGVudC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlck5nQ29udGVudENtZCBleHRlbmRzIFJlbmRlclRlbXBsYXRlQ21kIHtcbiAgLy8gVGhlIGluZGV4IG9mIHRoaXMgTmdDb250ZW50IGVsZW1lbnRcbiAgZ2V0IGluZGV4KCk6IG51bWJlciB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH07XG4gIC8vIFRoZSBpbmRleCBvZiB0aGUgTmdDb250ZW50IGVsZW1lbnQgaW50byB3aGljaCB0aGlzXG4gIC8vIE5nQ29udGVudCBlbGVtZW50IHNob3VsZCBiZSBwcm9qZWN0ZWQgKGlmIGFueSlcbiAgZ2V0IG5nQ29udGVudEluZGV4KCk6IG51bWJlciB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH07XG59XG5cbi8qKlxuICogQ29tbWFuZCB0byBiZWdpbiByZW5kZXJpbmcgYW4gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlckJlZ2luRWxlbWVudENtZCBleHRlbmRzIFJlbmRlckJlZ2luQ21kIHtcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfTtcbiAgZ2V0IGF0dHJOYW1lQW5kVmFsdWVzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTsgfTtcbiAgZ2V0IGV2ZW50VGFyZ2V0QW5kTmFtZXMoKTogc3RyaW5nW10geyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9O1xufVxuXG4vKipcbiAqIENvbW1hbmQgdG8gYmVnaW4gcmVuZGVyaW5nIGEgY29tcG9uZW50LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVuZGVyQmVnaW5Db21wb25lbnRDbWQgZXh0ZW5kcyBSZW5kZXJCZWdpbkVsZW1lbnRDbWQge1xuICBnZXQgdGVtcGxhdGVJZCgpOiBzdHJpbmcgeyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9O1xufVxuXG4vKipcbiAqIENvbW1hbmQgdG8gcmVuZGVyIGEgY29tcG9uZW50J3MgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZW5kZXJFbWJlZGRlZFRlbXBsYXRlQ21kIGV4dGVuZHMgUmVuZGVyQmVnaW5FbGVtZW50Q21kIHtcbiAgZ2V0IGlzTWVyZ2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdW5pbXBsZW1lbnRlZCgpOyB9O1xuICBnZXQgY2hpbGRyZW4oKTogUmVuZGVyVGVtcGxhdGVDbWRbXSB7IHJldHVybiB1bmltcGxlbWVudGVkKCk7IH07XG59XG5cbi8qKlxuICogVmlzaXRvciBmb3IgYSB7QGxpbmsgUmVuZGVyVGVtcGxhdGVDbWR9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlckNvbW1hbmRWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KGNtZDogUmVuZGVyVGV4dENtZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE5nQ29udGVudChjbWQ6IFJlbmRlck5nQ29udGVudENtZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEJlZ2luRWxlbWVudChjbWQ6IFJlbmRlckJlZ2luRWxlbWVudENtZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEVuZEVsZW1lbnQoY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEJlZ2luQ29tcG9uZW50KGNtZDogUmVuZGVyQmVnaW5Db21wb25lbnRDbWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRFbmRDb21wb25lbnQoY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoY21kOiBSZW5kZXJFbWJlZGRlZFRlbXBsYXRlQ21kLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cblxuLyoqXG4gKiBDb250YWluZXIgY2xhc3MgcHJvZHVjZWQgYnkgYSB7QGxpbmsgUmVuZGVyZXJ9IHdoZW4gY3JlYXRpbmcgYSBSZW5kZXIgVmlldy5cbiAqXG4gKiBBbiBpbnN0YW5jZSBvZiBgUmVuZGVyVmlld1dpdGhGcmFnbWVudHNgIGNvbnRhaW5zIGEge0BsaW5rIFJlbmRlclZpZXdSZWZ9IGFuZCBhbiBhcnJheSBvZlxuICoge0BsaW5rIFJlbmRlckZyYWdtZW50UmVmfXMgYmVsb25naW5nIHRvIHRoaXMgUmVuZGVyIFZpZXcuXG4gKi9cbi8vIFRPRE8oaSk6IHJlZmFjdG9yIHRoaXMgYnkgUmVuZGVyVmlld1dpdGhGcmFnbWVudHMgYW5kIGFkZGluZyBmcmFnbWVudHMgZGlyZWN0bHkgdG8gUmVuZGVyVmlld1JlZlxuZXhwb3J0IGNsYXNzIFJlbmRlclZpZXdXaXRoRnJhZ21lbnRzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKipcbiAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUge0BsaW5rIFJlbmRlclZpZXdSZWZ9LlxuICAgICAgICovXG4gICAgICBwdWJsaWMgdmlld1JlZjogUmVuZGVyVmlld1JlZixcbiAgICAgIC8qKlxuICAgICAgICogQXJyYXkgb2Yge0BsaW5rIFJlbmRlckZyYWdtZW50UmVmfXMgb3JkZXJlZCBpbiB0aGUgZGVwdGgtZmlyc3Qgb3JkZXIuXG4gICAgICAgKi9cbiAgICAgIHB1YmxpYyBmcmFnbWVudFJlZnM6IFJlbmRlckZyYWdtZW50UmVmW10pIHt9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFbGVtZW50IHRoYXQgaXMgcGFydCBvZiBhIHtAbGluayBSZW5kZXJWaWV3UmVmIFJlbmRlciBWaWV3fS5cbiAqXG4gKiBgUmVuZGVyRWxlbWVudFJlZmAgaXMgYSBjb3VudGVycGFydCB0byB7QGxpbmsgRWxlbWVudFJlZn0gYXZhaWxhYmxlIGluIHRoZSBBcHBsaWNhdGlvbiBDb250ZXh0LlxuICpcbiAqIFdoZW4gdXNpbmcgYFJlbmRlcmVyYCBmcm9tIHRoZSBBcHBsaWNhdGlvbiBDb250ZXh0LCBgRWxlbWVudFJlZmAgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZlxuICogYFJlbmRlckVsZW1lbnRSZWZgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlckVsZW1lbnRSZWYge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBSZW5kZXIgVmlldyB0aGF0IGNvbnRhaW5zIHRoaXMgRWxlbWVudC5cbiAgICovXG4gIHJlbmRlclZpZXc6IFJlbmRlclZpZXdSZWY7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKlxuICAgKiBJbmRleCBvZiB0aGUgRWxlbWVudCAoaW4gdGhlIGRlcHRoLWZpcnN0IG9yZGVyKSBpbnNpZGUgdGhlIFJlbmRlciBWaWV3LlxuICAgKlxuICAgKiBUaGlzIGluZGV4IGlzIHVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyIHRvIGxvY2F0ZSBlbGVtZW50cy5cbiAgICovXG4gIGJvdW5kRWxlbWVudEluZGV4OiBudW1iZXI7XG59XG5cbi8qKlxuICogVGVtcGxhdGUgZm9yIHJlbmRlcmluZyBhIGNvbXBvbmVudCwgaW5jbHVkaW5nIGNvbW1hbmRzIGFuZCBzdHlsZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW5kZXJDb21wb25lbnRUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgc2hvcnRJZDogc3RyaW5nLCBwdWJsaWMgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgICAgICAgICAgIHB1YmxpYyBjb21tYW5kczogUmVuZGVyVGVtcGxhdGVDbWRbXSwgcHVibGljIHN0eWxlczogc3RyaW5nW10pIHt9XG59XG5cbi8qKlxuICogSW5qZWN0YWJsZSBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYSBsb3ctbGV2ZWwgaW50ZXJmYWNlIGZvciBtb2RpZnlpbmcgdGhlIFVJLlxuICpcbiAqIFVzZSB0aGlzIHNlcnZpY2UgdG8gYnlwYXNzIEFuZ3VsYXIncyB0ZW1wbGF0aW5nIGFuZCBtYWtlIGN1c3RvbSBVSSBjaGFuZ2VzIHRoYXQgY2FuJ3QgYmVcbiAqIGV4cHJlc3NlZCBkZWNsYXJhdGl2ZWx5LiBGb3IgZXhhbXBsZSBpZiB5b3UgbmVlZCB0byBzZXQgYSBwcm9wZXJ0eSBvciBhbiBhdHRyaWJ1dGUgd2hvc2UgbmFtZSBpc1xuICogbm90IHN0YXRpY2FsbHkga25vd24sIHVzZSB7QGxpbmsgI3NldEVsZW1lbnRQcm9wZXJ0eX0gb3Ige0BsaW5rICNzZXRFbGVtZW50QXR0cmlidXRlfVxuICogcmVzcGVjdGl2ZWx5LlxuICpcbiAqIElmIHlvdSBhcmUgaW1wbGVtZW50aW5nIGEgY3VzdG9tIHJlbmRlcmVyLCB5b3UgbXVzdCBpbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UuXG4gKlxuICogVGhlIGRlZmF1bHQgUmVuZGVyZXIgaW1wbGVtZW50YXRpb24gaXMgYERvbVJlbmRlcmVyYC4gQWxzbyBhdmFpbGFibGUgaXMgYFdlYldvcmtlclJlbmRlcmVyYC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNvbXBvbmVudCB0ZW1wbGF0ZSByZXByZXNlbnRlZCBhcyBhcnJheXMgb2Yge0BsaW5rIFJlbmRlclRlbXBsYXRlQ21kfXMgYW5kIHN0eWxlc1xuICAgKiB3aXRoIHRoZSBSZW5kZXJlci5cbiAgICpcbiAgICogT25jZSBhIHRlbXBsYXRlIGlzIHJlZ2lzdGVyZWQgaXQgY2FuIGJlIHJlZmVyZW5jZWQgdmlhIHtAbGluayBSZW5kZXJCZWdpbkNvbXBvbmVudENtZH0gd2hlblxuICAgKiB7QGxpbmsgI2NyZWF0ZVByb3RvVmlldyBjcmVhdGluZyBSZW5kZXIgUHJvdG9WaWV3fS5cbiAgICovXG4gIGFic3RyYWN0IHJlZ2lzdGVyQ29tcG9uZW50VGVtcGxhdGUodGVtcGxhdGU6IFJlbmRlckNvbXBvbmVudFRlbXBsYXRlKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHtAbGluayBSZW5kZXJQcm90b1ZpZXdSZWZ9IGZyb20gYW4gYXJyYXkgb2Yge0BsaW5rIFJlbmRlclRlbXBsYXRlQ21kfWBzLlxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlUHJvdG9WaWV3KGNvbXBvbmVudFRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtZHM6IFJlbmRlclRlbXBsYXRlQ21kW10pOiBSZW5kZXJQcm90b1ZpZXdSZWY7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSb290IEhvc3QgVmlldyBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYGhvc3RQcm90b1ZpZXdSZWZgLlxuICAgKlxuICAgKiBgZnJhZ21lbnRDb3VudGAgaXMgdGhlIG51bWJlciBvZiBuZXN0ZWQge0BsaW5rIFJlbmRlckZyYWdtZW50UmVmfXMgaW4gdGhpcyBWaWV3LiBUaGlzIHBhcmFtZXRlclxuICAgKiBpcyBub24tb3B0aW9uYWwgc28gdGhhdCB0aGUgcmVuZGVyZXIgY2FuIGNyZWF0ZSBhIHJlc3VsdCBzeW5jaHJvbm91c2x5IGV2ZW4gd2hlbiBhcHBsaWNhdGlvblxuICAgKiBydW5zIGluIGEgZGlmZmVyZW50IGNvbnRleHQgKGUuZy4gaW4gYSBXZWIgV29ya2VyKS5cbiAgICpcbiAgICogYGhvc3RFbGVtZW50U2VsZWN0b3JgIGlzIGEgKENTUykgc2VsZWN0b3IgZm9yIHF1ZXJ5aW5nIHRoZSBtYWluIGRvY3VtZW50IHRvIGZpbmQgdGhlIEhvc3RcbiAgICogRWxlbWVudC4gVGhlIG5ld2x5IGNyZWF0ZWQgUm9vdCBIb3N0IFZpZXcgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoaXMgZWxlbWVudC5cbiAgICpcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB7QGxpbmsgUmVuZGVyVmlld1dpdGhGcmFnbWVudHN9LCByZXByZXNlbnRpbmcgdGhlIFJlbmRlciBWaWV3LlxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlUm9vdEhvc3RWaWV3KGhvc3RQcm90b1ZpZXdSZWY6IFJlbmRlclByb3RvVmlld1JlZiwgZnJhZ21lbnRDb3VudDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nKTogUmVuZGVyVmlld1dpdGhGcmFnbWVudHM7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBSZW5kZXIgVmlldyBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYHByb3RvVmlld1JlZmAuXG4gICAqXG4gICAqIGBmcmFnbWVudENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIG5lc3RlZCB7QGxpbmsgUmVuZGVyRnJhZ21lbnRSZWZ9cyBpbiB0aGlzIFZpZXcuIFRoaXMgcGFyYW1ldGVyXG4gICAqIGlzIG5vbi1vcHRpb25hbCBzbyB0aGF0IHRoZSByZW5kZXJlciBjYW4gY3JlYXRlIGEgcmVzdWx0IHN5bmNocm9ub3VzbHkgZXZlbiB3aGVuIGFwcGxpY2F0aW9uXG4gICAqIHJ1bnMgaW4gYSBkaWZmZXJlbnQgY29udGV4dCAoZS5nLiBpbiBhIFdlYiBXb3JrZXIpLlxuICAgKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHtAbGluayBSZW5kZXJWaWV3V2l0aEZyYWdtZW50c30sIHJlcHJlc2VudGluZyB0aGUgUmVuZGVyIFZpZXcuXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGVWaWV3KHByb3RvVmlld1JlZjogUmVuZGVyUHJvdG9WaWV3UmVmLFxuICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50Q291bnQ6IG51bWJlcik6IFJlbmRlclZpZXdXaXRoRnJhZ21lbnRzO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhIFJlbmRlciBWaWV3IHNwZWNpZmllZCB2aWEgYHZpZXdSZWZgLlxuICAgKlxuICAgKiBUaGlzIG9wZXJhdGlvbiBzaG91bGQgYmUgcGVyZm9ybWVkIG9ubHkgb24gYSBWaWV3IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBkZWh5ZHJhdGVkIGFuZFxuICAgKiBhbGwgb2YgaXRzIFJlbmRlciBGcmFnbWVudHMgaGF2ZSBiZWVuIGRldGFjaGVkLlxuICAgKlxuICAgKiBEZXN0cm95aW5nIGEgVmlldyBpbmRpY2F0ZXMgdG8gdGhlIFJlbmRlcmVyIHRoYXQgdGhpcyBWaWV3IGlzIG5vdCBnb2luZyB0byBiZSByZWZlcmVuY2VkIGluIGFueVxuICAgKiBmdXR1cmUgb3BlcmF0aW9ucy4gSWYgdGhlIFJlbmRlcmVyIGNyZWF0ZWQgYW55IHJlbmRlcmVyLXNwZWNpZmljIG9iamVjdHMgZm9yIHRoaXMgVmlldywgdGhlc2VcbiAgICogb2JqZWN0cyBzaG91bGQgbm93IGJlIGRlc3Ryb3llZCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy5cbiAgICovXG4gIGFic3RyYWN0IGRlc3Ryb3lWaWV3KHZpZXdSZWY6IFJlbmRlclZpZXdSZWYpO1xuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyB0aGUgTm9kZXMgb2YgYSBSZW5kZXIgRnJhZ21lbnQgYWZ0ZXIgdGhlIGxhc3QgTm9kZSBvZiBgcHJldmlvdXNGcmFnbWVudFJlZmAuXG4gICAqL1xuICBhYnN0cmFjdCBhdHRhY2hGcmFnbWVudEFmdGVyRnJhZ21lbnQocHJldmlvdXNGcmFnbWVudFJlZjogUmVuZGVyRnJhZ21lbnRSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFJlZjogUmVuZGVyRnJhZ21lbnRSZWYpO1xuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyB0aGUgTm9kZXMgb2YgdGhlIFJlbmRlciBGcmFnbWVudCBhZnRlciBhbiBFbGVtZW50LlxuICAgKi9cbiAgYWJzdHJhY3QgYXR0YWNoRnJhZ21lbnRBZnRlckVsZW1lbnQoZWxlbWVudFJlZjogUmVuZGVyRWxlbWVudFJlZiwgZnJhZ21lbnRSZWY6IFJlbmRlckZyYWdtZW50UmVmKTtcblxuICAvKipcbiAgICogRGV0YWNoZXMgdGhlIE5vZGVzIG9mIGEgUmVuZGVyIEZyYWdtZW50IGZyb20gdGhlaXIgcGFyZW50LlxuICAgKlxuICAgKiBUaGlzIG9wZXJhdGlvbnMgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uIGEgVmlldyB0aGF0IGhhcyBiZWVuIGFscmVhZHlcbiAgICoge0BsaW5rICNkZWh5ZHJhdGVWaWV3IGRlaHlkcmF0ZWR9LlxuICAgKi9cbiAgYWJzdHJhY3QgZGV0YWNoRnJhZ21lbnQoZnJhZ21lbnRSZWY6IFJlbmRlckZyYWdtZW50UmVmKTtcblxuICAvKipcbiAgICogTm90aWZpZXMgYSBjdXN0b20gUmVuZGVyZXIgdG8gaW5pdGlhbGl6ZSBhIFJlbmRlciBWaWV3LlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgQW5ndWxhciBhZnRlciBhIFJlbmRlciBWaWV3IGhhcyBiZWVuIGNyZWF0ZWQsIG9yIHdoZW4gYSBwcmV2aW91c2x5XG4gICAqIGRlaHlkcmF0ZWQgUmVuZGVyIFZpZXcgaXMgYWJvdXQgdG8gYmUgcmV1c2VkLlxuICAgKi9cbiAgYWJzdHJhY3QgaHlkcmF0ZVZpZXcodmlld1JlZjogUmVuZGVyVmlld1JlZik7XG5cbiAgLyoqXG4gICAqIE5vdGlmaWVzIGEgY3VzdG9tIFJlbmRlcmVyIHRoYXQgYSBSZW5kZXIgVmlldyBpcyBubyBsb25nZXIgYWN0aXZlLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgQW5ndWxhciBiZWZvcmUgYSBSZW5kZXIgVmlldyB3aWxsIGJlIGRlc3Ryb3llZCwgb3Igd2hlbiBhIGh5ZHJhdGVkXG4gICAqIFJlbmRlciBWaWV3IGlzIGFib3V0IHRvIGJlIHB1dCBpbnRvIGEgcG9vbCBmb3IgZnV0dXJlIHJldXNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZGVoeWRyYXRlVmlldyh2aWV3UmVmOiBSZW5kZXJWaWV3UmVmKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5kZXJseWluZyBuYXRpdmUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGBsb2NhdGlvbmAsIG9yIGBudWxsYCBpZiBkaXJlY3QgYWNjZXNzXG4gICAqIHRvIG5hdGl2ZSBlbGVtZW50cyBpcyBub3Qgc3VwcG9ydGVkIChlLmcuIHdoZW4gdGhlIGFwcGxpY2F0aW9uIHJ1bnMgaW4gYSB3ZWIgd29ya2VyKS5cbiAgICpcbiAgICogPGRpdiBjbGFzcz1cImNhbGxvdXQgaXMtY3JpdGljYWxcIj5cbiAgICogICA8aGVhZGVyPlVzZSB3aXRoIGNhdXRpb248L2hlYWRlcj5cbiAgICogICA8cD5cbiAgICogICAgVXNlIHRoaXMgYXBpIGFzIHRoZSBsYXN0IHJlc29ydCB3aGVuIGRpcmVjdCBhY2Nlc3MgdG8gRE9NIGlzIG5lZWRlZC4gVXNlIHRlbXBsYXRpbmcgYW5kXG4gICAqICAgIGRhdGEtYmluZGluZywgb3Igb3RoZXIge0BsaW5rIFJlbmRlcmVyfSBtZXRob2RzIGluc3RlYWQuXG4gICAqICAgPC9wPlxuICAgKiAgIDxwPlxuICAgKiAgICBSZWx5aW5nIG9uIGRpcmVjdCBET00gYWNjZXNzIGNyZWF0ZXMgdGlnaHQgY291cGxpbmcgYmV0d2VlbiB5b3VyIGFwcGxpY2F0aW9uIGFuZCByZW5kZXJpbmdcbiAgICogICAgbGF5ZXJzIHdoaWNoIHdpbGwgbWFrZSBpdCBpbXBvc3NpYmxlIHRvIHNlcGFyYXRlIHRoZSB0d28gYW5kIGRlcGxveSB5b3VyIGFwcGxpY2F0aW9uIGludG8gYVxuICAgKiAgICB3ZWIgd29ya2VyLlxuICAgKiAgIDwvcD5cbiAgICogPC9kaXY+XG4gICAqL1xuICBhYnN0cmFjdCBnZXROYXRpdmVFbGVtZW50U3luYyhsb2NhdGlvbjogUmVuZGVyRWxlbWVudFJlZik6IGFueTtcblxuICAvKipcbiAgICogU2V0cyBhIHByb3BlcnR5IG9uIHRoZSBFbGVtZW50IHNwZWNpZmllZCB2aWEgYGxvY2F0aW9uYC5cbiAgICovXG4gIGFic3RyYWN0IHNldEVsZW1lbnRQcm9wZXJ0eShsb2NhdGlvbjogUmVuZGVyRWxlbWVudFJlZiwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHByb3BlcnR5VmFsdWU6IGFueSk7XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIG9uIHRoZSBFbGVtZW50IHNwZWNpZmllZCB2aWEgYGxvY2F0aW9uYC5cbiAgICpcbiAgICogSWYgYGF0dHJpYnV0ZVZhbHVlYCBpcyBgbnVsbGAsIHRoZSBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAgICovXG4gIGFic3RyYWN0IHNldEVsZW1lbnRBdHRyaWJ1dGUobG9jYXRpb246IFJlbmRlckVsZW1lbnRSZWYsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTtcblxuICBhYnN0cmFjdCBzZXRCaW5kaW5nRGVidWdJbmZvKGxvY2F0aW9uOiBSZW5kZXJFbGVtZW50UmVmLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlOiBzdHJpbmcpO1xuXG4gIC8qKlxuICAgKiBTZXRzIGEgKENTUykgY2xhc3Mgb24gdGhlIEVsZW1lbnQgc3BlY2lmaWVkIHZpYSBgbG9jYXRpb25gLlxuICAgKlxuICAgKiBgaXNBZGRgIHNwZWNpZmllcyBpZiB0aGUgY2xhc3Mgc2hvdWxkIGJlIGFkZGVkIG9yIHJlbW92ZWQuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRFbGVtZW50Q2xhc3MobG9jYXRpb246IFJlbmRlckVsZW1lbnRSZWYsIGNsYXNzTmFtZTogc3RyaW5nLCBpc0FkZDogYm9vbGVhbik7XG5cbiAgLyoqXG4gICAqIFNldHMgYSAoQ1NTKSBpbmxpbmUgc3R5bGUgb24gdGhlIEVsZW1lbnQgc3BlY2lmaWVkIHZpYSBgbG9jYXRpb25gLlxuICAgKlxuICAgKiBJZiBgc3R5bGVWYWx1ZWAgaXMgYG51bGxgLCB0aGUgc3R5bGUgaXMgcmVtb3ZlZC5cbiAgICovXG4gIGFic3RyYWN0IHNldEVsZW1lbnRTdHlsZShsb2NhdGlvbjogUmVuZGVyRWxlbWVudFJlZiwgc3R5bGVOYW1lOiBzdHJpbmcsIHN0eWxlVmFsdWU6IHN0cmluZyk7XG5cbiAgLyoqXG4gICAqIENhbGxzIGEgbWV0aG9kIG9uIHRoZSBFbGVtZW50IHNwZWNpZmllZCB2aWEgYGxvY2F0aW9uYC5cbiAgICovXG4gIGFic3RyYWN0IGludm9rZUVsZW1lbnRNZXRob2QobG9jYXRpb246IFJlbmRlckVsZW1lbnRSZWYsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhbiBpbnRlcnBvbGF0ZWQgVGV4dE5vZGUgYXQgdGhlIHNwZWNpZmllZCBpbmRleCB0byB0aGUgYHRleHRgIHZhbHVlLlxuICAgKlxuICAgKiBgdGV4dE5vZGVJbmRleGAgaXMgdGhlIGRlcHRoLWZpcnN0IGluZGV4IG9mIHRoZSBOb2RlIGFtb25nIGludGVycG9sYXRlZCBOb2RlcyBpbiB0aGUgUmVuZGVyXG4gICAqIFZpZXcuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRUZXh0KHZpZXdSZWY6IFJlbmRlclZpZXdSZWYsIHRleHROb2RlSW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTtcblxuICAvKipcbiAgICogU2V0cyBhIGRpc3BhdGNoZXIgdG8gcmVsYXkgYWxsIGV2ZW50cyB0cmlnZ2VyZWQgaW4gdGhlIGdpdmVuIFJlbmRlciBWaWV3LlxuICAgKlxuICAgKiBFYWNoIFJlbmRlciBWaWV3IGNhbiBoYXZlIG9ubHkgb25lIEV2ZW50IERpc3BhdGNoZXIsIGlmIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyxcbiAgICogdGhlIGxhc3QgcHJvdmlkZWQgZGlzcGF0Y2hlciB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBhYnN0cmFjdCBzZXRFdmVudERpc3BhdGNoZXIodmlld1JlZjogUmVuZGVyVmlld1JlZiwgZGlzcGF0Y2hlcjogUmVuZGVyRXZlbnREaXNwYXRjaGVyKTtcbn1cblxuLyoqXG4gKiBBIGRpc3BhdGNoZXIgdGhhdCByZWxheXMgYWxsIGV2ZW50cyB0aGF0IG9jY3VyIGluIGEgUmVuZGVyIFZpZXcuXG4gKlxuICogVXNlIHtAbGluayBSZW5kZXJlciNzZXRFdmVudERpc3BhdGNoZXJ9IHRvIHJlZ2lzdGVyIGEgZGlzcGF0Y2hlciBmb3IgYSBwYXJ0aWN1bGFyIFJlbmRlciBWaWV3LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlckV2ZW50RGlzcGF0Y2hlciB7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBFdmVudCBjYWxsZWQgYGV2ZW50TmFtZWAgd2FzIHRyaWdnZXJlZCBvbiBhbiBFbGVtZW50IHdpdGggYW4gRXZlbnQgQmluZGluZyBmb3IgdGhpc1xuICAgKiBFdmVudC5cbiAgICpcbiAgICogYGVsZW1lbnRJbmRleGAgc3BlY2lmaWVzIHRoZSBkZXB0aC1maXJzdCBpbmRleCBvZiB0aGUgRWxlbWVudCBpbiB0aGUgUmVuZGVyIFZpZXcuXG4gICAqXG4gICAqIGBsb2NhbHNgIGlzIGEgbWFwIGZvciBsb2NhbCB2YXJpYWJsZSB0byB2YWx1ZSBtYXBwaW5nIHRoYXQgc2hvdWxkIGJlIHVzZWQgd2hlbiBldmFsdWF0aW5nIHRoZVxuICAgKiBFdmVudCBCaW5kaW5nIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIFJldHVybnMgYGZhbHNlYCBpZiBgcHJldmVudERlZmF1bHRgIHNob3VsZCBiZSBjYWxsZWQgdG8gc3RvcCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgRXZlbnRcbiAgICogaW4gdGhlIFJlbmRlcmluZyBDb250ZXh0LlxuICAgKi9cbiAgZGlzcGF0Y2hSZW5kZXJFdmVudChlbGVtZW50SW5kZXg6IG51bWJlciwgZXZlbnROYW1lOiBzdHJpbmcsIGxvY2FsczogTWFwPHN0cmluZywgYW55Pik6IGJvb2xlYW47XG59XG4iXX0=