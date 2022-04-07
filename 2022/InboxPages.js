// https://www.redditstatic.com/desktop2x/InboxPages.a584e481d65529f07ffc.js
// Retrieved at 4/7/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
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
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/env/index.ts"),
				u = s("./src/reddit/actions/platform.ts");
			var m = s("./src/reddit/components/IFrame/index.m.less"),
				b = s.n(m);
			var p = e => {
					let {
						src: t,
						onLoad: s
					} = e;
					const r = Object(n.useRef)(null),
						d = function(e) {
							const [t, s] = Object(n.useState)(0);
							return Object(n.useEffect)(() => {
								s(e => e + 1)
							}, [e]), t
						}(t);
					return o.a.createElement("iframe", {
						key: d,
						className: b.a.IFrame,
						ref: r,
						src: t,
						onLoad: () => {
							const e = (() => {
								var e, t;
								try {
									return null === (t = null === (e = r.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t ? void 0 : t.document
								} catch (s) {}
							})();
							e && s && s(e)
						}
					})
				},
				f = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/contexts/NavbarExp.ts"),
				O = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/selectors/userPrefs.ts"),
				x = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				g = s.n(x);

			function j() {
				return (j = Object.assign || function(e) {
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
					nightmode: v.db
				}),
				w = Object(d.b)(S, e => ({
					onTitleChange: t => e(u.m({
						title: t
					}))
				})),
				E = e => {
					let {
						offsetLeft: t,
						children: s,
						...r
					} = e;
					const d = Object(n.useContext)(h.a);
					return o.a.createElement("div", j({
						className: Object(a.a)(g.a.wrapper, {
							[g.a.wrapperExp]: d
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
				render() {
					const {
						isSubscriptionsPinned: e,
						servedOrigin: t,
						nightmode: s
					} = this.props;
					let n = 0;
					e && (n += f.u), 0 !== this.state.bodyScrollOffset && (n -= this.state.bodyScrollOffset);
					const d = Object(l.a)() ? t : "true",
						c = Object(l.a)() ? r.a.redditUrl : "";
					let a;
					return a = s ? c + Object(i.a)(this.props.url, {
						embedded: d,
						dark: "true"
					}) : c + Object(i.a)(this.props.url, {
						embedded: d
					}), o.a.createElement(E, {
						offsetLeft: n
					}, o.a.createElement(p, {
						src: a,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = w(_)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxPages.a584e481d65529f07ffc.js.map