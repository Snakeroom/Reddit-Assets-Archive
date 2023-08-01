// https://www.redditstatic.com/desktop2x/FeedAnnouncementClassic.3f027558e2bd43706d94.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeedAnnouncementClassic"], {
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
				classicThumbnail: "_2fa_3Edns31LsDbDafu-Pl",
				imgPlaceholder: "_10Yafla_hoZR_DxVqhKyik",
				compactThumbnail: "_2WkgoKwf5nrvq_AHXcKCiv",
				ctaContainer: "_2aJlBdiCPrr6sB1O1CcGLs",
				ctaText: "_2JeUVsd4VGGDf5hABXR4gh",
				ctaCaret: "XGdy-mMHrdZKlz1yxZ89C"
			}
		},
		"./src/reddit/components/FeedAnnouncement/FeedAnnouncementClassic/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/classNames/index.ts"),
				c = a("./node_modules/react/index.js"),
				o = a.n(c),
				r = a("./src/reddit/components/VerticalVotes/DisabledVerticalVotes.tsx"),
				i = a("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = a.n(i);
			var d = () => o.a.createElement(r.a, {
					className: l.a.horizontalVotes,
					scoreClassName: l.a.customScoreStyles
				}),
				m = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = a("./src/reddit/constants/postLayout.ts"),
				b = a("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = a("./src/reddit/hooks/useTheme.ts"),
				C = a("./src/reddit/icons/fonts/index.tsx"),
				_ = a("./src/reddit/icons/svgs/CaretRight/index.tsx"),
				h = a("./src/reddit/components/FeedAnnouncement/utils.ts"),
				A = a("./src/reddit/components/FeedAnnouncement/FeedAnnouncementClassic/index.m.less"),
				x = a.n(A);
			const g = e => {
				let {
					imgUrl: t,
					isCompact: a
				} = e;
				return a ? o.a.createElement("div", {
					className: Object(s.a)(x.a.compactThumbnail)
				}, null == t ? o.a.createElement(C.a, {
					name: "text_post"
				}) : o.a.createElement(C.a, {
					name: "image_post"
				})) : null == t ? o.a.createElement("div", {
					className: Object(s.a)(x.a.classicThumbnail)
				}, o.a.createElement("div", {
					className: Object(s.a)(x.a.imgPlaceholder)
				}, o.a.createElement(C.a, {
					name: "text_post"
				}))) : o.a.createElement("div", {
					className: Object(s.a)(x.a.classicThumbnail)
				}, o.a.createElement("img", {
					src: t
				}))
			};
			t.default = function(e) {
				const {
					announcement: t,
					layout: a,
					onClose: c,
					onClick: i
				} = e, {
					body: l,
					title: C,
					cta: A
				} = t, E = Object(p.a)(), f = Object(h.a)(t), j = a === u.g.Compact;
				return o.a.createElement("div", {
					className: Object(s.a)({
						[x.a.container]: !0,
						[x.a.isCompact]: j
					}),
					role: "button",
					tabIndex: 0,
					"aria-label": C,
					onClick: i
				}, o.a.createElement("div", {
					className: Object(s.a)({
						[x.a.leftRail]: !0,
						[x.a.isCompact]: j
					})
				}, o.a.createElement("div", {
					className: Object(s.a)(x.a.horizontalVotes)
				}, o.a.createElement(d, null)), o.a.createElement("div", {
					className: Object(s.a)(x.a.verticalVotes)
				}, o.a.createElement(r.a, null))), o.a.createElement("div", {
					className: Object(s.a)(x.a.innerContainer),
					style: Object(b.c)(void 0, {
						theme: E
					})
				}, o.a.createElement(g, {
					imgUrl: f,
					isCompact: j
				}), o.a.createElement("div", {
					className: Object(s.a)(x.a.contentContainer)
				}, o.a.createElement("div", {
					className: Object(s.a)(x.a.headerContainer)
				}, o.a.createElement("h3", {
					className: Object(s.a)({
						[x.a.title]: !0,
						[x.a.ellipsis]: !0,
						[x.a.isCompact]: j
					})
				}, C), o.a.createElement("button", {
					className: x.a.headerCloseButton,
					onClick: e => {
						e.stopPropagation(), c()
					},
					title: n.fbt._("Close", null, {
						hk: "4CfMwa"
					})
				}, o.a.createElement(m.b, null))), o.a.createElement("p", {
					className: Object(s.a)({
						[x.a.body]: !0,
						[x.a.ellipsis]: !0,
						[x.a.isCompact]: j
					})
				}, l), o.a.createElement("div", {
					className: Object(s.a)(x.a.fromReddit)
				}, n.fbt._("From Reddit", null, {
					hk: "1Sazf8"
				})), A ? o.a.createElement("div", {
					className: Object(s.a)(x.a.ctaContainer)
				}, o.a.createElement("a", {
					onClick: i,
					className: Object(s.a)(x.a.ctaText),
					tabIndex: 0,
					"aria-label": A
				}, A, o.a.createElement(_.a, {
					className: Object(s.a)(x.a.ctaCaret),
					height: "20px"
				}))) : null)))
			}
		},
		"./src/reddit/components/FeedAnnouncement/utils.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./src/config.ts"),
				s = a("./src/lib/sentry/index.ts"),
				c = a("./node_modules/react/index.js");
			const o = new Map,
				r = async e => {
					if (o.has(e)) return await o.get(e);
					const t = (async e => {
						return (await fetch(e, {
							method: "HEAD"
						})).ok
					})(e);
					return o.set(e, t), await t
				}, i = e => {
					const {
						id: t
					} = e, a = (e => {
						const {
							id: t,
							images: a
						} = e;
						if (null == a || 0 === a.length) return null;
						if (a.length > 1) return s.c.withScope(e => {
							e.setExtra("announcementId", t), s.c.captureException("Gallery announcements are not supported")
						}), null;
						const n = a[0];
						switch (n.__typename) {
							case "ImageAsset":
							case "AnimatedImageAsset":
								return n.url || null;
							default:
								return s.c.withScope(e => {
									e.setExtra("announcementId", t), s.c.captureException(`MediaAsset type [${n.__typename}] in images field is not supported.`)
								}), null
						}
					})(e), [o, i] = Object(c.useState)(a || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII");
					return Object(c.useEffect)(() => {
						if (a) return;
						const e = (e => e.match(/^images_in_comments/) ? `${n.a.assetPath}/img/announcements/images_in_comments_announcement.jpg` : `${n.a.assetPath}/img/announcements/${e}.png`)(t);
						let s = !1;
						return r(e).then(t => {
							!1 === s && i(t ? e : null)
						}), () => {
							s = !0
						}
					}, [t]), o
				}
		},
		"./src/reddit/components/VerticalVotes/DisabledVerticalVotes.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/VerticalVotes/votes.tsx"),
				i = a("./src/reddit/controls/Score/index.tsx"),
				l = a("./src/reddit/models/Vote/index.ts"),
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
					}, c.a.createElement(r.d, {
						compact: !1,
						voteState: l.a.notVoted,
						interactive: !1
					})), c.a.createElement(i.a, {
						className: Object(o.a)(m.a.disabledScore, t),
						score: 0,
						voteState: l.a.notVoted,
						isScoreHidden: !0
					}), c.a.createElement("button", {
						className: m.a.disabledVoteIcon,
						"aria-label": n.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, c.a.createElement(r.c, {
						compact: !1,
						voteState: l.a.notVoted,
						interactive: !1
					})))
				}
			}
			t.a = u
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "e", (function() {
				return u
			})), a.d(t, "c", (function() {
				return b
			})), a.d(t, "b", (function() {
				return C
			})), a.d(t, "a", (function() {
				return _
			})), a.d(t, "d", (function() {
				return h
			}));
			var n = a("./node_modules/polished/dist/polished.es.js"),
				s = a("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				c = a("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = a("./src/reddit/models/NewStructuredStyles/index.ts"),
				r = a("./src/reddit/models/Theme/index.ts"),
				i = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = a("./src/reddit/helpers/styles/mixins/index.m.less"),
				d = a.n(l);
			const m = {},
				u = e => Object(r.f)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				b = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(r.f)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(r.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				p = e => Object(n.k)(.2, e),
				C = e => e && e.postBackgroundColor ? {
					backgroundColor: p(e.postBackgroundColor)
				} : m,
				_ = e => e.isActive ? d.a.mIsActive : void 0,
				h = e => {
					const t = Object(c.a)(Object(s.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/svgs/CaretRight/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				height: e.height,
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeedAnnouncementClassic.3f027558e2bd43706d94.js.map