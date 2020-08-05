// https://www.redditstatic.com/desktop2x/InboxPages.03c29c844e758886de9f.js
// Retrieved at 8/5/2020, 12:50:06 PM by Reddit Dataminer v1.0.0
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
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/env/index.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/components/IFrame/index.m.less"),
				p = s.n(m);
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
			var f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				y = s("./src/reddit/constants/tracking.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const j = () => e => Object.assign(Object.assign({
				action: y.c.VIEW,
				noun: y.b.SCREEN,
				source: "global"
			}, (e => Object.assign({
				subreddit: g.subreddit(e),
				userSubreddit: g.userSubreddit(e)
			}, g.defaults(e)))(e)), {
				actionInfo: g.actionInfo(e, {
					pageType: "moderator_mail"
				})
			});
			var v = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				L = s.n(S);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			const w = Object(d.c)({
					isSubscriptionsPinned: x.b,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => "".concat(e.meta.protocol, "://").concat(e.meta.domain),
					nightmode: v.S
				}),
				P = Object(c.b)(w, e => ({
					onTitleChange: t => e(u.l({
						title: t
					}))
				})),
				I = e => {
					var {
						offsetLeft: t,
						children: s
					} = e, r = _(e, ["offsetLeft", "children"]);
					return n.a.createElement("div", E({
						className: L.a.wrapper,
						style: {
							left: t
						}
					}, r), s)
				};
			class R extends n.a.Component {
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
					e.title && (e.title.includes(a.L.MODERATOR) && this.props.sendEvent(j()), this.props.onTitleChange(e.title))
				}
				render() {
					const {
						isSubscriptionsPinned: e,
						servedOrigin: t,
						nightmode: s
					} = this.props;
					let o = 0;
					e && (o += h.u), 0 !== this.state.bodyScrollOffset && (o -= this.state.bodyScrollOffset);
					const c = Object(l.a)() ? t : "true",
						d = Object(l.a)() ? r.a.redditUrl : "";
					let a;
					return a = s ? d + Object(i.a)(this.props.url, {
						embedded: c,
						dark: "true"
					}) : d + Object(i.a)(this.props.url, {
						embedded: c
					}), n.a.createElement(I, {
						offsetLeft: o
					}, n.a.createElement(b, {
						src: a,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = P(Object(f.c)(R))
		}
	}
]);
//# sourceMappingURL=InboxPages.03c29c844e758886de9f.js.map