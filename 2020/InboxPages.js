// https://www.redditstatic.com/desktop2x/InboxPages.cbd84b265d5975d46573.js
// Retrieved at 1/27/2020, 2:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxPages"], {
		"./src/reddit/components/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "saPujbGMyXRwqISHcmJH9",
				iFrame: "saPujbGMyXRwqISHcmJH9"
			}
		},
		"./src/reddit/pages/RedditEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "e8fTXufFydLy7wHBm6rHP"
			}
		},
		"./src/reddit/pages/RedditEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/env/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/components/IFrame/index.m.less"),
				m = s.n(u);
			class p extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null
				}
				setRef(e) {
					this.ref = e
				}
				getDocument() {
					try {
						return this.ref.contentWindow.document
					} catch (e) {}
				}
				onLoad() {
					const e = this.getDocument();
					e && this.props.onLoad && this.props.onLoad(e)
				}
				render() {
					const {
						src: e
					} = this.props;
					return n.a.createElement("iframe", {
						className: m.a.IFrame,
						ref: e => this.setRef(e),
						src: e,
						onLoad: () => this.onLoad
					})
				}
			}
			var f = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/selectors/userPrefs.ts"),
				y = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				g = s.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			const x = Object(d.c)({
					isSubscriptionsPinned: O.b,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => "".concat(e.meta.protocol, "://").concat(e.meta.domain),
					nightmode: h.V
				}),
				S = Object(c.b)(x, e => ({
					onTitleChange: t => e(l.l({
						title: t
					}))
				})),
				L = e => {
					var {
						offsetLeft: t,
						children: s
					} = e, r = j(e, ["offsetLeft", "children"]);
					return n.a.createElement("div", v({
						className: g.a.wrapper,
						style: {
							left: t
						}
					}, r), s)
				};
			class _ extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0,
						hasMounted: !1
					}
				}
				componentDidMount() {
					const e = () => () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(b.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					}), this.setState({
						hasMounted: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				onLoad(e) {
					e.title && this.props.onTitleChange(e.title)
				}
				render() {
					const {
						isSubscriptionsPinned: e,
						servedOrigin: t,
						nightmode: s
					} = this.props;
					let o = 0;
					e && (o += f.v), 0 !== this.state.bodyScrollOffset && (o -= this.state.bodyScrollOffset);
					const c = Object(a.a)() ? t : "true",
						d = Object(a.a)() ? r.a.redditUrl : "";
					let l;
					return l = s ? d + Object(i.a)(this.props.url, {
						embedded: c,
						dark: "true"
					}) : d + Object(i.a)(this.props.url, {
						embedded: c
					}), n.a.createElement(L, {
						offsetLeft: o
					}, n.a.createElement(p, {
						src: l,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = S(_)
		}
	}
]);
//# sourceMappingURL=InboxPages.cbd84b265d5975d46573.js.map