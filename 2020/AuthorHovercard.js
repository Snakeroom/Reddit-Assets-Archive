// https://www.redditstatic.com/desktop2x/AuthorHovercard.0e4db32b23647633d1a0.js
// Retrieved at 5/5/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var r = t("./node_modules/react/index.js"),
				n = t.n(r),
				o = t("./src/reddit/components/Hovercards/helpers.ts"),
				a = t("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				c = t("./src/reddit/helpers/isPost.ts"),
				i = t("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				l = t("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				u = t("./src/reddit/components/TrackingHelper/index.tsx"),
				d = t("./src/reddit/helpers/trackers/authorHovercard.ts");
			const b = e => Object(c.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(d.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, s = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || l.a,
						tooltipType: e.tooltipType
					}), t = "".concat(s, "-hover-id"), r = e.author || e.postOrComment.author;
					return n.a.createElement(a.a, {
						authorOrSubredditName: r,
						className: e.hoverDivClassName,
						hoverId: t,
						sendHoverEvent: this.sendEvent,
						tooltipId: s
					}, e.children, n.a.createElement(i.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: t,
						sendEvent: e.sendEvent,
						subredditId: b(e.postOrComment),
						tooltipId: s,
						tooltipType: e.tooltipType,
						userName: r
					}))
				}
			}
			s.default = Object(u.c)(m)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, s, t) {
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
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return g
			}));
			t("./node_modules/core-js/modules/es6.symbol.js");
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				o = t.n(n),
				a = t("./src/reddit/constants/elementClassNames.ts"),
				c = t("./src/reddit/controls/Button/index.tsx"),
				i = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = t("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = t("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = t("./src/reddit/components/SubscribeButton/Base.m.less"),
				b = t.n(d),
				m = t("./src/lib/classNames/index.ts"),
				p = t("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, s) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && s.indexOf(r) < 0 && (t[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) s.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (t[r[n]] = e[r[n]])
				}
				return t
			};
			const _ = p.a.button("IconButton", b.a),
				f = p.a.wrapped(l.a, "SubscribeIcon", b.a),
				E = p.a.wrapped(i.a, "UnsubscribeIcon", b.a),
				S = p.a.wrapped(e => {
					var {
						border: s,
						small: t
					} = e, r = v(e, ["border", "small"]);
					return o.a.createElement(_, r, o.a.createElement(f, {
						className: Object(m.a)(r.className, {
							[b.a.isSmall]: t
						})
					}))
				}, "SubscribeIconButton", b.a),
				N = p.a.wrapped(e => {
					var {
						border: s,
						small: t
					} = e, r = v(e, ["border", "small"]);
					return s ? o.a.createElement(c.f, h({}, r, {
						className: Object(m.a)(r.className, {
							[b.a.isSmall]: t
						})
					})) : o.a.createElement(c.n, h({}, r, {
						className: Object(m.a)(r.className, {
							[b.a.isSmall]: t
						})
					}))
				}, "SubscribeInternalButton", b.a),
				O = e => {
					var {
						icon: s
					} = e, t = v(e, ["icon"]);
					return s ? o.a.createElement(S, h({}, t, {
						className: Object(m.a)(t.className, {
							[b.a.isSmall]: t.small
						})
					})) : o.a.createElement(N, h({}, t, {
						className: Object(m.a)(t.className, {
							[b.a.isSmall]: t.small
						})
					}))
				},
				B = p.a.wrapped(e => {
					var {
						border: s,
						language: t,
						small: r,
						type: n
					} = e, c = v(e, ["border", "language", "small", "type"]);
					return o.a.createElement(_, c, o.a.createElement(E, {
						className: Object(m.a)(a.n, c.className, {
							[b.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", b.a),
				j = p.a.wrapped(e => {
					var {
						border: s,
						language: t,
						small: n,
						type: a
					} = e, i = v(e, ["border", "language", "small", "type"]);
					const l = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: b.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), o.a.createElement("span", {
							className: b.a.UnsubscribeButtonHover
						}, "subreddit" === a ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						u = Object(m.a)(i.className, {
							[b.a.isSmall]: n
						});
					return s ? o.a.createElement(c.i, h({}, i, {
						className: u,
						children: l
					})) : o.a.createElement(c.n, h({}, i, {
						className: u,
						children: l
					}))
				}, "UnsubscribeButton", b.a),
				x = e => {
					var {
						icon: s
					} = e, t = v(e, ["icon"]);
					return s ? o.a.createElement(B, h({}, t, {
						className: Object(m.a)(t.className, {
							[b.a.isSmall]: t.small
						})
					})) : o.a.createElement(j, h({}, t, {
						className: Object(m.a)(t.className, {
							[b.a.isSmall]: t.small
						})
					}))
				};
			class g extends o.a.Component {
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
						className: s,
						icon: t = !1,
						id: r,
						language: n,
						small: a = !1
					} = this.props, c = {
						border: e,
						className: s,
						icon: t,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? o.a.createElement(x, h({}, c, {
						language: n,
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
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return a
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: s
					} = e;
					return "subreddit" === s ? "subredditActions" : "profileActions"
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
				a = e => {
					let {
						type: s,
						key: t
					} = e;
					return o[n({
						type: s
					})][t]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./src/reddit/components/TrackingHelper/index.tsx"),
				n = t("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = t("./src/reddit/components/SubscribeButton/Base.tsx");
			s.a = Object(n.a)(Object(r.c)(o.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/react-redux/es/index.js"),
				n = t("./node_modules/reselect/es/index.js"),
				o = t("./src/reddit/actions/subscription/index.ts"),
				a = t("./src/reddit/selectors/subreddit.ts"),
				c = t("./src/reddit/selectors/user.ts");
			s.a = Object(r.b)(() => Object(n.c)({
				language: c.P,
				userIsSubscriber: a.Z
			}), (e, s) => {
				let {
					identifier: t
				} = s;
				return {
					onSubscribe: () => e(o.d([t], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([t], !1))
				}
			})
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				n = t.n(r);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		}
	}
]);
//# sourceMappingURL=AuthorHovercard.0e4db32b23647633d1a0.js.map