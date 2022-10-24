// https://www.redditstatic.com/desktop2x/InboxPages.558ce519df9ea6486195.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxPages"], {
		"./src/reddit/components/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "saPujbGMyXRwqISHcmJH9",
				iFrame: "saPujbGMyXRwqISHcmJH9"
			}
		},
		"./src/reddit/components/IFrame/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts");
			var d = s("./src/reddit/components/IFrame/index.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					src: t,
					className: s,
					onLoad: d
				} = e;
				const i = Object(r.useRef)(null),
					a = function(e) {
						const [t, s] = Object(r.useState)(0);
						return Object(r.useEffect)(() => {
							s(e => e + 1)
						}, [e]), t
					}(t);
				return n.a.createElement("iframe", {
					key: a,
					className: Object(o.a)(c.a.IFrame, s),
					ref: i,
					src: t,
					onLoad: () => {
						const e = (() => {
							var e, t;
							try {
								return null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t ? void 0 : t.document
							} catch (s) {}
						})();
						e && d && d(e)
					}
				})
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
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/env/index.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/components/IFrame/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				p = s("./src/reddit/contexts/NavbarExp.ts"),
				f = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/selectors/userPrefs.ts"),
				x = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				v = s.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = Object(c.c)({
					isSubscriptionsPinned: O.c,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => `${e.meta.protocol}://${e.meta.domain}`,
					nightmode: h.eb
				}),
				g = Object(d.b)(j, e => ({
					onTitleChange: t => e(u.m({
						title: t
					}))
				})),
				S = e => {
					let {
						offsetLeft: t,
						children: s,
						...r
					} = e;
					const d = Object(n.useContext)(p.a);
					return o.a.createElement("div", y({
						className: Object(a.a)(v.a.wrapper, {
							[v.a.wrapperExp]: d
						}),
						style: {
							left: t
						}
					}, r), s)
				};
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.onLoad = e => {
						e.title && this.props.onTitleChange(e.title)
					}, this.state = {
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
							bodyScrollOffset: Object(f.d)(document.body)
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
				render() {
					const {
						isSubscriptionsPinned: e,
						servedOrigin: t,
						nightmode: s
					} = this.props;
					let n = 0;
					e && (n += b.t), 0 !== this.state.bodyScrollOffset && (n -= this.state.bodyScrollOffset);
					const d = Object(l.a)() ? t : "true",
						c = Object(l.a)() ? r.a.redditUrl : "";
					let a;
					return a = s ? c + Object(i.a)(this.props.url, {
						embedded: d,
						dark: "true"
					}) : c + Object(i.a)(this.props.url, {
						embedded: d
					}), o.a.createElement(S, {
						offsetLeft: n
					}, o.a.createElement(m.a, {
						src: a,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = g(_)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxPages.558ce519df9ea6486195.js.map