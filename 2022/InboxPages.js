// https://www.redditstatic.com/desktop2x/InboxPages.2946e0e3fc0e54715188.js
// Retrieved at 2/3/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
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
				wrapper: "e8fTXufFydLy7wHBm6rHP",
				wrapperExp: "IoQ1HVty-IsaMDvgZhGwf"
			}
		},
		"./src/reddit/pages/RedditEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/env/index.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/components/IFrame/index.m.less"),
				p = s.n(u);
			class b extends n.a.Component {
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
						className: p.a.IFrame,
						ref: e => this.setRef(e),
						src: e,
						onLoad: () => this.onLoad
					})
				}
			}
			var f = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/contexts/NavbarExp.ts"),
				O = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/selectors/userPrefs.ts"),
				g = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				v = s.n(g);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(c.c)({
					isSubscriptionsPinned: y.b,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => `${e.meta.protocol}://${e.meta.domain}`,
					nightmode: x.X
				}),
				j = Object(d.b)(S, e => ({
					onTitleChange: t => e(m.m({
						title: t
					}))
				})),
				w = ({
					offsetLeft: e,
					children: t,
					...s
				}) => {
					const r = Object(o.useContext)(h.a);
					return n.a.createElement("div", L({
						className: Object(a.a)(v.a.wrapper, {
							[v.a.wrapperExp]: r
						}),
						style: {
							left: e
						}
					}, s), t)
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
							bodyScrollOffset: Object(O.d)(document.body)
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
					e && (o += f.u), 0 !== this.state.bodyScrollOffset && (o -= this.state.bodyScrollOffset);
					const d = Object(l.a)() ? t : "true",
						c = Object(l.a)() ? r.a.redditUrl : "";
					let a;
					return a = s ? c + Object(i.a)(this.props.url, {
						embedded: d,
						dark: "true"
					}) : c + Object(i.a)(this.props.url, {
						embedded: d
					}), n.a.createElement(w, {
						offsetLeft: o
					}, n.a.createElement(b, {
						src: a,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = j(_)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxPages.2946e0e3fc0e54715188.js.map