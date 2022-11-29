// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a.5f2b0d1c0d687b18b109.js
// Retrieved at 11/29/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"], {
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const c = e => (e, t, s) => ({
				...a.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: a.d(e),
				adblock: a.e(e),
				app: a.f(e),
				feed: a.r(e),
				geo: a.t(e),
				platform: a.I(e),
				referrer: a.Z(e),
				request: a.ab(e),
				screen: a.cb(e),
				session: a.gb(e),
				user: a.sb(e),
				media: s ? a.C(e, s) : null,
				post: s ? a.K(e, s) : null
			});
			var i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, n) {
							var o, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const a = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : i.a.UNKNOWN
							}(e.target);
							a && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(a, i.b) ? Object(d.a)(c(n)(s, a, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(c(n)(s, i.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n,
					...c
				} = e, l = Object(r.a)(i.a.adLinkWrapper, t, {
					[i.a.ctaExperiment]: !!s,
					[i.a.borders]: "classic" === s,
					[i.a.borderTop]: "compact" === s || "conversation" === s,
					[i.a.borderBottom]: "card" === s
				});
				return o.a.createElement("div", d({
					className: l,
					"data-adclicklocation": a.a.CTA_WHITESPACE
				}, c), n)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: m,
					callToAction: p,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let x = m.displayText;
				m.displayText.length >= 40 && (x = m.displayText.slice(0, 40 - "...".length) + "...");
				const v = Object(d.u)(s, m.displayText),
					h = Object(d.v)(s) ? x : b,
					E = Object(d.v)(s) ? s.subcaption : m.displayText,
					f = Object(a.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					O = Object(a.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: f
				}, b && !o && !v && r.a.createElement("span", {
					className: u.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !v && r.a.createElement(i.a, {
					href: m.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: O,
					"data-adclicklocation": l.a.CTA_URL
				}, x), v && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: u.a.productTitle
				}, h), r.a.createElement("span", {
					className: u.a.subcaption
				}, E))), p && r.a.createElement(c.a, {
					className: u.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				m = s("./src/reddit/components/Hovercards/helpers.ts"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/hooks/useIsOverlay.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/redditGQL/types.ts");
			const v = Object(i.v)();
			t.a = v(e => {
				let {
					pageLayer: t,
					postOrComment: s,
					className: i
				} = e;
				var v;
				const h = Object(p.a)(),
					E = Object(a.d)(),
					f = (null === (v = null == t ? void 0 : t.urlParams) || void 0 === v ? void 0 : v.pageName) === c.wb.Modqueue,
					O = Object(o.useCallback)(() => {
						const e = Object(m.b)({
							itemId: s.id,
							tooltipIdPrefix: l.a,
							tooltipType: h ? u.f.Lightbox : void 0
						});
						E(Object(d.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: x.x.Note
							}
						}))
					}, [s, E, h]);
				return !f || Object(b.p)(s.author) ? null : r.a.createElement("button", {
					className: i,
					onClick: O
				}, n.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return o.a.createElement(a.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": c.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				E = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				_ = s.n(O),
				j = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 8,
				C = 1,
				N = j.a.div("Container", _.a),
				I = j.a.div("PostMetaWrapper", _.a),
				y = j.a.wrapped(p.c, "PostTitle", _.a),
				S = j.a.div("FlatList", _.a),
				g = j.a.div("FlatItem", _.a),
				T = j.a.span("FlatListDotSpacer", _.a),
				L = j.a.wrapped(N, "LinkContainer", _.a),
				M = j.a.div("Content", _.a),
				A = j.a.div("ThumbnailContainer", _.a),
				F = Object(i.c)({
					isCurrentUserProfilePost: E.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== v.Sb.TOPIC),
					shouldOpenPostInNewTab: f.kb
				}),
				w = Object(a.b)(F);
			t.c = Object(h.b)(w(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: c
				} = e;
				if (!a) return null;
				const i = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: c,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(L, {
					className: d
				}, r.a.createElement(M, null, r.a.createElement(I, null, r.a.createElement(u.a, i)), B(a), a.source && r.a.createElement(b.a, {
					post: a
				}), U(e)), W(e)) : r.a.createElement(N, {
					className: d
				}, r.a.createElement(I, null, r.a.createElement(u.a, i)), B(a), R(e), U(e))
			}));
			const B = e => r.a.createElement(y, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, P({}, n, {
						className: _.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(S, null, r.a.createElement(g, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(T, null), r.a.createElement(g, null, D(e)))
				},
				D = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(c.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				W = e => r.a.createElement(A, null, r.a.createElement(x.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const b = c.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const c = n && n.eventInfo,
					u = Object(l.a)(n),
					x = c && Object(a.c)(c.eventStart, c.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(i.a, {
					post: n
				}), !u && x && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				i = s("./src/reddit/icons/fonts/Live/index.tsx"),
				d = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");
			const p = u.a.span("PostEventFutureText", m.a),
				b = u.a.span("PostEventPastText", m.a),
				x = u.a.span("PostEventNowText", m.a),
				v = u.a.span("Container", m.a),
				h = u.a.wrapped(c.a, "CalendarIcon", m.a),
				E = u.a.wrapped(i.a, "LiveIcon", m.a),
				f = u.a.div("LoadingState", m.a);
			class O extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: c,
						eventStart: i
					} = s, l = Object(r.e)(i, n);
					let m, u;
					if (this.state.mounted || l === r.a.Live) m = o.a.createElement(d.c, {
						startTime: i,
						endTime: n,
						isLive: c
					});
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						m = o.a.createElement(f, {
							className: e
						})
					}
					if (c) u = o.a.createElement(x, null, o.a.createElement(E, null), m);
					else if (l === r.a.Future) u = o.a.createElement(p, null, o.a.createElement(h, null), m);
					else {
						if (l !== r.a.Past) return null;
						u = o.a.createElement(b, null, o.a.createElement(h, null), m)
					}
					return o.a.createElement(v, {
						className: e
					}, u)
				}
			}
			t.a = O
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				E = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(O);
			const j = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(i.a)(_.a.icon, _.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case x.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case x.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case x.o.TEXT:
						case x.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case x.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case x.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case x.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = j(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: x,
					toggle: O,
					useMediaIcons: j
				} = e, k = s || x, C = Object(a.e)(h.b), N = Object(a.e)(h.c), I = t => {
					(C || N) && (t.preventDefault(), e.showModalOnPostLinkClick(k))
				}, y = k.media, S = Object(v.q)(x), g = o && !!s;
				return y && !S && !(("rtjson" === y.type || "text" === y.type || "liveaudio" === y.type) && !Object(p.a)(k)) || !!x.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": f.a.MEDIA,
					onClick: O
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: _.a.icon
				}) : j ? r.a.createElement(r.a.Fragment, null, P(k.media && k.media.type, g, x), r.a.createElement(b.a, {
					name: "expand",
					className: Object(i.a)(_.a.icon, _.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: _.a.icon
				})) : k.source && k.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: k.source.url,
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source,
					sourceElement: l ? E.SourceElement.PostImage : E.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(i.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : r.a.createElement(c.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(k.permalink),
					rel: "nofollow",
					onClick: I
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: _.a.icon
				}))
			})
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(o.a)(i.a.banner, i.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(o.a)(i.a.banner, i.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/isRemoved.ts"),
				h = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				E = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				P = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = s("./src/reddit/icons/fonts/Report/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				I = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/modQueue.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(g);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", L({
					className: T.a.removalReason
				}, e), e.children),
				A = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				F = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				w = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				B = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				R = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				U = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				D = Object(x.v)({
					isProfilePostListing: x.N,
					isSubreddit: x.Q
				}),
				W = Object(c.c)({
					isModQueueDisplayEnabled: e => {
						const t = p.e[Object(x.U)(e, {})] === p.d.Card;
						return Object(y.b)(e, t)
					},
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(S.q)(e, {
							postId: s.id
						})
					},
					modModeEnabled: x.W
				}),
				H = Object(a.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						Promise.all([s.e("Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-components-Not~05f7c62f"), s.e("removalReasonActions")]).then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(H(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: a,
					inSubredditOrProfile: c,
					isCompactPinnedPost: l,
					isPinned: p,
					isProfilePostListing: x,
					modModeEnabled: y,
					onHideTooltip: S,
					onOpenRemovalReasonModal: g,
					onShowTooltip: D,
					post: W,
					tooltipType: H,
					isModQueueDisplayEnabled: J
				} = e;
				const X = {
						caretOnTop: !1
					},
					q = W.isRemoved && !W.modRemovalReason && !W.modNote && W.belongsTo.type === b.a.SUBREDDIT,
					V = U("Approve", W.id, H),
					G = U("Archived", W.id, H),
					Q = U("Lock", W.id, H),
					Z = U("Mod", W.id, H),
					K = U("Remove", W.id, H),
					z = U("Report", W.id, H),
					Y = U("Spam", W.id, H),
					$ = U("Sticky", W.id, H),
					ee = U("Pinned", W.id, H);
				return r.a.createElement("div", {
					className: t
				}, c && s && W.distinguishType === d.J.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(f.a, {
					name: "mod",
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.modIcon)
				}), r.a.createElement(m.c, L({
					tooltipId: Z,
					text: w(s)
				}, X))), W.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.archivedIcon),
					desc: A(),
					id: G,
					onMouseEnter: D(G),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: G,
					text: A()
				}, X))), W.isLocked && !W.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.lockIcon),
					desc: F(),
					id: Q,
					onMouseEnter: D(Q),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: Q,
					text: F()
				}, X))), a && Object(I.w)(W) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(N.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.stickyIcon),
					desc: B(),
					id: $,
					onMouseEnter: D($),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: $,
					text: B()
				}, X))), x && p && r.a.createElement(o.Fragment, null, r.a.createElement(N.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.stickyIcon),
					desc: R(),
					id: ee,
					onMouseEnter: D(ee),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: ee,
					text: R()
				}, X))), !J && r.a.createElement(r.a.Fragment, null, (W.isApproved || W.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.approveIcon),
					desc: Object(h.a)(W),
					id: V,
					onMouseEnter: D(V),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: V,
					text: Object(h.a)(W)
				}, X))), Object(v.a)(W) && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.removeIcon),
					desc: Object(h.b)(W),
					id: K,
					onMouseEnter: D(K),
					onMouseLeave: S
				}), q && r.a.createElement(u.a, {
					className: T.a.addRemovalReason,
					onClick: g,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (W.modRemovalReason || W.modNote) && r.a.createElement(M, {
					onMouseEnter: D(K),
					onMouseLeave: S
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, L({
					tooltipId: K,
					text: Object(h.b)(W)
				}, X))), W.bannedBy && W.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.spamIcon),
					desc: Object(h.d)(W),
					id: Y,
					onMouseEnter: D(Y),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: Y,
					text: Object(h.d)(W)
				}, X)))), Object(E.a)(W) && !y && !J && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(i.a)(T.a.icon, T.a.reportIcon),
					desc: Object(h.c)(W.numReports),
					id: z,
					onMouseEnter: D(z),
					onMouseLeave: S
				}), r.a.createElement(m.c, L({
					tooltipId: z,
					text: Object(h.c)(W.numReports)
				}, X))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(i.d(e.postId))
							})
						}, [s, e.postId]),
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, a), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/objectSelector/index.ts"),
				f = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/reddit/components/PostContainer/index.m.less"),
				P = s.n(j);
			const k = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(E.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(x.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(v.d)(e).pageType
				})),
				C = "post-container";
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: x,
						style: v,
						ref: E,
						shouldAddGalleryViewability: f = !0
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(a.t)(l, r);
								e && e.outboundUrl && x(Object(i.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(P.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": C,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": _.a.BACKGROUND
					}, s), j = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.F)(l.media) && f ? o.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || j ? o.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(O))
				}
			}
			t.b = k(Object(O.a)(Object(f.a)(Object(u.c)(N))))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, a = s.isFollowed;
					let c = a ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && o && (c = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(i.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, c)
				}
			}
			const x = Object(a.b)(() => Object(c.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.z)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.wc
			}), e => e === m.Md);
			var x = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/classNames/index.ts"),
				h = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				j = s.n(_);
			const P = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(i.e)(e => Object(f.G)(e, {
						postId: t
					})),
					r = Object(i.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(O.Y)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(h.a, {
					className: Object(v.a)(j.a.link, s),
					to: r.url
				}, x.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(E.b, {
					className: j.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: j.a.subredditName
				}, r.displayText)) : null
			};
			var k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				C = s("./src/reddit/connectors/PostViewable/index.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/hooks/useIsOverlay.ts"),
				T = s("./src/reddit/hooks/usePageLayer.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				A = s.n(M);
			const F = e => {
				let {
					post: t
				} = e;
				const s = `${Object(L.b)(t.score)} ${x.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(L.b)(t.numComments)} ${x.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: A.a.postInformation
				}, o.a.createElement("h5", {
					className: A.a.title
				}, t.title), o.a.createElement("div", {
					className: A.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var w = s("./src/lib/isUrl/index.ts"),
				B = s("./src/reddit/actions/profile/index.ts"),
				R = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/components/UserIcon/index.tsx"),
				D = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				W = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				H = s("./src/reddit/selectors/profile.ts"),
				J = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				X = s.n(J);
			const q = e => {
				let {
					post: t
				} = e;
				var s, r, a, c;
				const d = Object(i.d)(),
					l = Object(i.e)(Object(H.l)(t.author)),
					m = Object(n.useMemo)(() => Object(R.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(w.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || d(Object(B.d)(t.author))
				}, [d, t.author, u]);
				const p = !u && Object(W.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(D.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: X.a.media
				}, u ? o.a.createElement(R.b, {
					post: t,
					url: m,
					className: X.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: X.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: X.a.userIconContainer
				}, o.a.createElement(U.a, {
					className: Object(v.a)({
						[X.a.snoovatarUserIcon]: p,
						[X.a.defaultUserIcon]: b
					}, X.a.userIcon),
					iconUrl: null === (c = null == l ? void 0 : l.icon) || void 0 === c ? void 0 : c.url,
					userName: l.name,
					wrapperClassName: X.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var V = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				G = s.n(V);
			const Q = Object(C.a)(null);
			var Z = Object(I.b)(Q(e => {
					let {
						post: t
					} = e;
					const s = Object(T.a)(),
						n = Object(g.a)(),
						r = Object(S.a)(),
						a = Object(N.x)(s) && !n;
					return o.a.createElement(h.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(y.b)(t.permalink) : Object(k.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement(F, {
						post: t
					}), o.a.createElement(q, {
						post: t
					})))
				})),
				K = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				z = s.n(K);
			const Y = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: z.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(i.d)();
				if (!Object(i.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(d.y)(t, l.a.Click))
				}, o.a.createElement(Y, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(P, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(c.C)(t) && Object(c.B)(t) ? o.a.createElement(te, {
					post: t
				}) : o.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/components/PostMeta/index.m.less"),
				P = s.n(j);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: j,
					isOverlay: k,
					isTopicPage: C,
					post: N,
					shouldShowSubscribeButton: I,
					subredditOrProfile: y,
					tooltipType: S
				} = e, g = !!C, T = Object(O.a)(), L = Object(r.e)(e => !!y && Object(a.i)(e, y.id));
				return o.a.createElement("div", {
					className: P.a.metaContainer
				}, !n && !N.isSponsored && y && o.a.createElement(d.a, {
					postId: N.id,
					subredditName: y.name
				}, o.a.createElement(b.a, {
					className: P.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: y.url,
						state: T
					}
				}, y.displayText)), y && y.isQuarantined && o.a.createElement(p.a, null), !n && !N.isSponsored && y && I && !j && o.a.createElement(x.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(f.k)(N.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: y.name,
						type: Object(_.i)(y) ? v.a.PROFILE : v.a.SUBREDDIT
					},
					postId: N.id,
					size: h.d.XXS,
					small: !0
				}), !n && !N.isSponsored && o.a.createElement(E.b, null), !n && !N.isSponsored && o.a.createElement(l.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), o.a.createElement(u.g, {
					className: P.a.postTopMeta,
					flairStyleTemplate: t,
					post: N,
					tooltipType: S,
					isModWithUserNotesPermissions: L
				}), o.a.createElement(m.a, {
					displayText: y ? y.displayText : null,
					inSubredditOrProfile: !!n,
					post: N,
					tooltipType: S
				}), !g && o.a.createElement(c.a, {
					hideCta: s,
					thing: N,
					tooltipType: k ? u.f.Lightbox : void 0
				}), L && o.a.createElement(i.a, {
					postOrComment: N,
					className: P.a.addModNote
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = s.n(x);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: c,
					post: x,
					share: E
				} = e;
				const f = Object(l.b)(),
					O = Object(a.d)(),
					_ = x && x.id,
					j = x && x.voteState;
				let P = null;
				_ || (P = t ? "user_hovercard" : "profile_overview");
				const k = Object(o.useCallback)(() => f(Object(u.h)(t ? "user_hovercard" : "profile_overview", s)), [t, f, s]);
				return r.a.createElement(m.t, {
					onClick: () => {
						c ? (f(u.i), _ && j === b.a.notVoted && O(Object(i.jb)(_))) : k();
						const e = c ? "postify" : "copy";
						O(Object(d.b)({
							clickSource: P,
							share: E,
							source: e
						}))
					},
					className: Object(n.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: c
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[v.a.shirtIcon]: !c,
						[v.a.avatarPostButtonShirtIcon]: c
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: v.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/getShortenedLink.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				m = "snoovatars",
				u = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				x = s.n(b);
			var v = e => {
					let {
						sourceUrl: t,
						username: s,
						post: n
					} = e;
					const [r, a] = new URL(t).pathname.split("/").slice(2), c = function(e) {
						return `${l}/${+e>=d?u:m}/shared/${e}.png`
					}(a);
					return o.a.createElement("div", {
						className: x.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: x.a.avatarPostImage,
						src: c,
						alt: i.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(p.a, {
						isHovercard: !1,
						username: s,
						isAvatarPost: !0,
						post: n,
						share: {
							username: r,
							avatarId: a
						}
					}))
				},
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				E = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/components/SourceLink/index.m.less"),
				_ = s.n(O),
				j = s("./src/lib/lessComponent.tsx"),
				P = s("./src/telemetry/models/Outbound.ts"),
				k = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const C = j.a.wrapped(f.a, "OutboundLinkIcon", _.a),
				N = j.a.div("SourceLinkWrapper", _.a);

			function I(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n,
					pageLayer: i
				} = e, d = n ? P.SourceElement.PostLink : P.SourceElement.ListingPostLink, {
					source: l
				} = s, m = s.isSponsored || Object(r.u)(i), u = Object(E.a)(s), p = Object(k.a)();
				return !l || p ? null : u ? o.a.createElement(v, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : o.a.createElement(N, {
					className: Object(a.a)({
						[_.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(h.a, {
					href: l.url,
					isSponsored: m,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(c.a)({
					...s,
					isSponsored: m
				}), o.a.createElement(C, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...x
						} = this.props, v = this.state.isHovered, h = Object(i.a)({
							type: t.type,
							key: v ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(c.t, m({
							className: e,
							priority: x.shouldReverseColor ? c.c.Primary : c.c.Secondary,
							text: h,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: c.d.XSP
						}, x))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...x
						} = this.props, v = Object(i.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(c.t, m({
							className: e,
							priority: x.shouldReverseColor ? c.c.Secondary : c.c.Primary,
							size: c.d.XSP,
							text: v,
							onClick: this.onClick
						}, x, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(u, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(a.a)(Object(r.c)(p))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[i.a.redditStyle]: e.redditStyle,
					[i.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/featureFlags/index.ts");

			function i(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, a = r;
					return n ? o.a.createElement(t, a) : void 0 !== s ? o.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				i = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				a = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var c = s("./src/reddit/selectors/experiments/econ/index.ts");
			const i = e => Object(n.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: s,
						avatarShareUrl: n
					} = e;
					const c = a.test(n.trim()),
						i = o.includes(t),
						d = r.includes(s);
					return c && i && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(c.a)(t)
			})
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("archived", e.isFilled), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("scheduled", e.isFilled), i.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("live", e.isFilled), i.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), i.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("pin", e.isFilled), i.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function o(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/selectors/posts.ts");
			const i = e => Object(r.c)(e, {
					experimentName: o.ef,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => (t === o.mf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(a.B)(e),
				l = Object(n.a)(c.G, i, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, i, (e, t) => d(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a.5f2b0d1c0d687b18b109.js.map