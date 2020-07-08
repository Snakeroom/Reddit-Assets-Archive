// https://www.redditstatic.com/desktop2x/AuthorHovercard.ec0121e2fa5c76db692b.js
// Retrieved at 7/8/2020, 4:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/Hovercards/helpers.ts"),
				c = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				l = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			const b = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(d.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || l.a,
						tooltipType: e.tooltipType
					}), s = "".concat(t, "-hover-id"), r = e.author || e.postOrComment.author;
					return n.a.createElement(c.a, {
						authorOrSubredditName: r,
						className: e.hoverDivClassName,
						hoverId: s,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, n.a.createElement(i.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: s,
						sendEvent: e.sendEvent,
						subredditId: b(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: r
					}))
				}
			}
			t.default = Object(u.c)(m)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				c = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				b = s.n(d),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const _ = p.a.button("IconButton", b.a),
				f = p.a.wrapped(l.a, "SubscribeIcon", b.a),
				E = p.a.wrapped(i.a, "UnsubscribeIcon", b.a),
				S = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = v(e, ["border", "small"]);
					return o.a.createElement(_, r, o.a.createElement(f, {
						className: Object(m.a)(r.className, {
							[b.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", b.a),
				N = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = v(e, ["border", "small"]);
					return t ? o.a.createElement(a.f, h({}, r, {
						className: Object(m.a)(r.className, {
							[b.a.isSmall]: s
						})
					})) : o.a.createElement(a.n, h({}, r, {
						className: Object(m.a)(r.className, {
							[b.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", b.a),
				O = e => {
					var {
						icon: t
					} = e, s = v(e, ["icon"]);
					return t ? o.a.createElement(S, h({}, s, {
						className: Object(m.a)(s.className, {
							[b.a.isSmall]: s.small
						})
					})) : o.a.createElement(N, h({}, s, {
						className: Object(m.a)(s.className, {
							[b.a.isSmall]: s.small
						})
					}))
				},
				B = p.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: r
					} = e, n = v(e, ["border", "small", "type"]);
					return o.a.createElement(_, n, o.a.createElement(E, {
						className: Object(m.a)(c.n, n.className, {
							[b.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", b.a),
				j = p.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: n
					} = e, c = v(e, ["border", "small", "type"]);
					const i = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: b.a.UnsubscribeButtonDefault
						}, "subreddit" === n ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), o.a.createElement("span", {
							className: b.a.UnsubscribeButtonHover
						}, "subreddit" === n ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(m.a)(c.className, {
							[b.a.isSmall]: s
						});
					return t ? o.a.createElement(a.i, h({}, c, {
						className: l,
						children: i
					})) : o.a.createElement(a.n, h({}, c, {
						className: l,
						children: i
					}))
				}, "UnsubscribeButton", b.a),
				x = e => {
					var {
						icon: t
					} = e, s = v(e, ["icon"]);
					return t ? o.a.createElement(B, h({}, s, {
						className: Object(m.a)(s.className, {
							[b.a.isSmall]: s.small
						})
					})) : o.a.createElement(j, h({}, s, {
						className: Object(m.a)(s.className, {
							[b.a.isSmall]: s.small
						})
					}))
				};
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: r,
						small: n = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? o.a.createElement(x, h({}, c, {
						type: this.props.identifier.type
					})) : o.a.createElement(O, h({}, c, {
						id: r
					}), this.props.children, Object(u.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				c = e => {
					let {
						type: t,
						key: s
					} = e;
					return o[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(o.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				c = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: c.db
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(o.d([s], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([s], !1))
				}
			})
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		}
	}
]);
//# sourceMappingURL=AuthorHovercard.ec0121e2fa5c76db692b.js.map