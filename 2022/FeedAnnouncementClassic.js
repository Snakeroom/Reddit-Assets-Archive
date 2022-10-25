// https://www.redditstatic.com/desktop2x/FeedAnnouncementClassic.2f6b37db2d9d0f7300c0.js
// Retrieved at 10/25/2022, 7:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeedAnnouncementClassic"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, a) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/chat/controls/Svg/index.m.less"),
				l = a.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: a,
						active: n,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(c.a)(e.className, {
						[l.a.disable]: a,
						[l.a.active]: n,
						[l.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
		},
		"./src/chat/icons/svgs/CaretRight/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				c = a("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(c.a, o({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? s.a.createElement("path", {
				d: "M8.207,15.707,6.793,14.293,11.086,10,6.793,5.707,8.207,4.293l5,5a1,1,0,0,1,0,1.414Z"
			}) : s.a.createElement("path", {
				d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
			}))
		},
		"./src/reddit/components/FeedAnnouncement/FeedAnnouncementClassic/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1ey38vaKoqbYZS5Eio9yaa",
				isCompact: "_1TyJ_1df7bClk_bUEcPUXC",
				mIsActive: "_2zN1qoq9PnH5_NOu0m3OTs",
				innerContainer: "_3NJi39nG7TFxm85etjni8W",
				leftRail: "_2HyDs3XeEtfV9FuaBS_vYV",
				horizontalVotes: "Jmp15QCoUI94n8kj8FlNu",
				verticalVotes: "_2xdTW81fw7rsWlo-uRXeBh",
				contentContainer: "_2AkAfzEWrI9NeoK6U8Qu3W",
				headerContainer: "_3l9b-RMWoF11xE9RWYhljW",
				title: "_2j_Hr9SCKJ_0AYVQeRvEM0",
				headerCloseButton: "_1oae5ZTzu98_1X9btNu3Yf",
				ellipsis: "_2_kDjhBkrS2IOBPhiY1Wc0",
				body: "_3I7gSpPtxc-UKJJ4SHSZzS",
				fromReddit: "_2KPyW2Ac2eY9kNc1CLw2QK",
				thumbnailContainer: "_3AmaG4v33kz3LwdWt3RREe",
				ctaContainer: "_2aJlBdiCPrr6sB1O1CcGLs",
				ctaText: "_2JeUVsd4VGGDf5hABXR4gh"
			}
		},
		"./src/reddit/components/FeedAnnouncement/FeedAnnouncementClassic/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/chat/icons/svgs/CaretRight/index.tsx"),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./src/lib/classNames/index.ts"),
				o = a("./node_modules/react/index.js"),
				i = a.n(o),
				l = a("./src/reddit/components/VerticalVotes/DisabledVerticalVotes.tsx"),
				r = a("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = a.n(r);
			var m = () => i.a.createElement(l.a, {
					className: d.a.horizontalVotes,
					scoreClassName: d.a.customScoreStyles
				}),
				u = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = a("./src/reddit/constants/postLayout.ts"),
				v = a("./src/reddit/components/FeedAnnouncement/utils.ts"),
				_ = a("./src/reddit/components/FeedAnnouncement/FeedAnnouncementClassic/index.m.less"),
				h = a.n(_);
			t.default = function(e) {
				const {
					id: t,
					body: a,
					title: o,
					cta: r,
					url: d,
					layout: _,
					onClose: p
				} = e, x = _ === b.g.Compact;
				return i.a.createElement("div", {
					className: Object(c.a)({
						[h.a.container]: !0,
						[h.a.isCompact]: x
					})
				}, i.a.createElement("div", {
					className: Object(c.a)({
						[h.a.leftRail]: !0,
						[h.a.isCompact]: x
					})
				}, i.a.createElement("div", {
					className: Object(c.a)(h.a.horizontalVotes)
				}, i.a.createElement(m, null)), i.a.createElement("div", {
					className: Object(c.a)(h.a.verticalVotes)
				}, i.a.createElement(l.a, null))), i.a.createElement("div", {
					className: Object(c.a)(h.a.innerContainer)
				}, i.a.createElement("div", {
					className: Object(c.a)(h.a.thumbnailContainer)
				}, i.a.createElement("img", {
					src: Object(v.a)(t)
				})), i.a.createElement("div", {
					className: Object(c.a)(h.a.contentContainer)
				}, i.a.createElement("div", {
					className: Object(c.a)(h.a.headerContainer)
				}, i.a.createElement("h3", {
					className: Object(c.a)(h.a.title, h.a.ellipsis)
				}, o), i.a.createElement("button", {
					className: h.a.headerCloseButton,
					onClick: p,
					title: s.fbt._("Close", null, {
						hk: "4CfMwa"
					})
				}, i.a.createElement(u.b, null))), i.a.createElement("p", {
					className: Object(c.a)(h.a.body, h.a.ellipsis)
				}, a), i.a.createElement("div", {
					className: Object(c.a)(h.a.fromReddit)
				}, s.fbt._("From Reddit", null, {
					hk: "1Sazf8"
				})), null != r ? i.a.createElement("div", {
					className: Object(c.a)(h.a.ctaContainer)
				}, i.a.createElement("a", {
					href: d,
					className: Object(c.a)(h.a.ctaText)
				}, r, i.a.createElement(n.a, {
					height: "20px"
				}))) : null)))
			}
		},
		"./src/reddit/components/FeedAnnouncement/utils.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./src/config.ts");
			const s = e => ("test_id", `${n.a.assetPath}/img/announcements/test_id.png`)
		},
		"./src/reddit/components/VerticalVotes/DisabledVerticalVotes.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = a("./src/reddit/controls/Score/index.tsx"),
				r = a("./src/reddit/models/Vote/index.ts"),
				d = a("./src/reddit/components/VerticalVotes/index.m.less"),
				m = a.n(d);
			class u extends c.a.PureComponent {
				render() {
					const {
						className: e,
						scoreClassName: t
					} = this.props;
					return c.a.createElement("div", {
						className: Object(o.a)(e, m.a.votesContainer)
					}, c.a.createElement("button", {
						className: m.a.disabledVoteIcon,
						"aria-label": n.fbt._("Upvote", null, {
							hk: "4aEt1X"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, c.a.createElement(i.d, {
						compact: !1,
						voteState: r.a.notVoted,
						interactive: !1
					})), c.a.createElement(l.a, {
						disableInlineColor: !0,
						className: Object(o.a)(m.a.Score, m.a.disabledScore, t),
						score: 0,
						voteState: r.a.notVoted,
						isScoreHidden: !0
					}), c.a.createElement("button", {
						className: m.a.disabledVoteIcon,
						"aria-label": n.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, c.a.createElement(i.c, {
						compact: !1,
						voteState: r.a.notVoted,
						interactive: !1
					})))
				}
			}
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeedAnnouncementClassic.2f6b37db2d9d0f7300c0.js.map