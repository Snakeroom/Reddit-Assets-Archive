// https://www.redditstatic.com/desktop2x/InboxPages.c47c117ff4e9176c445e.js
// Retrieved at 3/18/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
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
			var r = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/env/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/components/IFrame/index.m.less"),
				u = s.n(m);
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
						className: u.a.IFrame,
						ref: e => this.setRef(e),
						src: e,
						onLoad: () => this.onLoad
					})
				}
			}
			var f = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/selectors/userPrefs.ts"),
				y = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				g = s.n(y);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(i.c)({
					isSubscriptionsPinned: O.b,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => `${e.meta.protocol}://${e.meta.domain}`,
					nightmode: b.V
				}),
				S = Object(d.b)(L, e => ({
					onTitleChange: t => e(l.l({
						title: t
					}))
				})),
				v = ({
					offsetLeft: e,
					children: t,
					...s
				}) => n.a.createElement("div", x({
					className: g.a.wrapper,
					style: {
						left: e
					}
				}, s), t);
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
							bodyScrollOffset: Object(h.d)(document.body)
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
					const d = Object(a.a)() ? t : "true",
						i = Object(a.a)() ? r.a.redditUrl : "";
					let l;
					return l = s ? i + Object(c.a)(this.props.url, {
						embedded: d,
						dark: "true"
					}) : i + Object(c.a)(this.props.url, {
						embedded: d
					}), n.a.createElement(v, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxPages.c47c117ff4e9176c445e.js.map