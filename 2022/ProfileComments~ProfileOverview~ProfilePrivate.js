// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.f798231ed73cbd0bb55c.js
// Retrieved at 2/16/2022, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseSlice.js"),
				o = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return e && e.length ? (t = n || void 0 === t ? 1 : o(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "b", (function() {
				return N
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				p = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				x = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				E = n("./src/reddit/actions/comment/constants.ts");
			const C = Object(r.a)(E.n),
				g = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.j)(s(), e)).ok && t((e => async t => {
						t(C({
							commentId: e
						}))
					})(e))
				}, y = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(f.K)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isLocked ? m.l : m.e;
					t(Object(v.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await a(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, k = Object(r.a)(E.F), O = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (t(Object(v.i)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(v.i)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(d.d)())
				}, _ = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o(),
						i = a.features.comments.models[e],
						l = a.user.account ? a.user.account.displayText : null;
					i && l && (n(Object(v.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(v.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, j = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.ignoreReports ? m.k : m.d;
					t(Object(v.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await a(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, I = (e, t, n) => async (r, a, {
					gqlContext: i
				}) => {
					const d = Object(h.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = n === o.dc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(i(), {
							input: m
						})).ok) r(Object(v.i)({
						[e]: {
							userReports: Object(u.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, N = (e, t, n) => async (s, r, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = r(),
						l = c.features.comments.models[e];
					if (!l) return;
					const p = l.postId,
						u = c.postStickiedComments.data[p],
						b = o.g[t];
					let h;
					if (s(Object(v.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === o.G.ADMIN,
								isMod: t === o.G.MODERATOR,
								isStickied: !!n
							}
						})), n && u && u !== e && s(Object(v.i)({
							[u]: {
								isStickied: !1
							}
						})), Object(x.a)(r())) {
						const s = Object(m.b)(d(), e, t),
							o = Object(m.c)(d(), e, !!n),
							r = [s];
						(n || !n && e === u) && r.push(o), h = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else h = await Object(m.g)(i(), e, b, n || null);
					h.ok ? n && s(k({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: o.u.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (s(Object(v.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), s(Object(v.i)({
						[u]: {
							isStickied: c.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(i.a, {
					href: d.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(a.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/ads/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/getShortenedLink.ts"),
				c = n("./src/lib/hooks/usePrevious.ts"),
				l = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				u = n("./src/config.ts"),
				b = n("./node_modules/react-redux/es/index.js"),
				h = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/Econ/Audio/index.m.less"),
				f = n.n(x),
				v = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				E = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var g = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, n = () => Math.floor(10 * Math.random() + 1), r = Object(b.e)(h.X), [i, d] = Object(s.useState)(!1), [c, l] = Object(s.useState)(n());
					return Object(s.useEffect)(() => {
						const e = setInterval(() => {
							d(!0), setTimeout(() => d(!1), 3500), l(n())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: f.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement("div", {
						className: f.a.classicSpeaker
					}, i && o.a.createElement(E.a, {
						className: Object(a.a)(f.a.speakerRings, {
							[f.a.nightMode]: r
						})
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: f.a.snoovatar,
						src: `${u.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: C._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !i && o.a.createElement("div", {
						className: f.a.muteContainer
					}, o.a.createElement(v.a, {
						className: f.a.muteIcon
					})))) : o.a.createElement("div", {
						className: f.a.endedClassicContainer
					}, o.a.createElement(v.a, {
						className: f.a.muteIcon
					}))
				},
				y = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				k = n("./src/reddit/components/ExpandoButton/index.tsx"),
				O = n("./src/reddit/components/Flatlist/index.tsx"),
				_ = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				I = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				N = n("./src/reddit/components/ModModeReports/index.tsx"),
				w = n("./src/reddit/components/ModModeReports/helpers.ts"),
				T = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				M = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				P = n("./src/reddit/components/PostContainer/index.tsx"),
				S = n("./src/reddit/components/PostMeta/index.tsx"),
				L = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				A = n("./src/reddit/components/PostTitle/index.tsx"),
				D = n("./src/reddit/components/PostTopMeta/index.tsx"),
				F = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				B = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				W = n("./src/reddit/models/Audio/index.ts"),
				U = n("./src/reddit/models/Media/index.ts"),
				H = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				V = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = n("./src/reddit/constants/postLayout.ts"),
				G = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				q = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				K = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = n("./src/reddit/helpers/search/renderMedia.tsx"),
				X = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				Q = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = n.n(Q),
				Y = n("./src/reddit/components/ClassicPost/index.m.less"),
				$ = n.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(i.a)(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: i,
					handleVote: u,
					isExpanded: b,
					inSubredditOrProfile: h,
					eventFactory: x,
					first: f,
					flairStyleTemplate: v,
					formatTitle: E,
					hostPostData: C,
					isCheckboxSelected: V,
					isCurrentUserProfilePost: Q,
					isFrontpage: Y,
					isGalleryTileLayoutDefault: te,
					isLoggedIn: ne,
					isOverlay: se,
					imageGalleryCurrentItem: oe,
					moderatorPermissions: re,
					modModeEnabled: ae,
					onClickPost: ie,
					onIgnoreReports: de,
					onOpenReportsDropdown: ce,
					onSizeChanged: le,
					poll: me,
					post: pe,
					postId: ue,
					redditStyle: be,
					scrollerItemRef: he,
					showBulkActionCheckbox: xe,
					showEditFlair: fe,
					showMedia: ve,
					subredditOrProfile: Ee,
					toggleCheckbox: Ce,
					userIsOp: ge,
					shouldShowGalleryTileOption: ye,
					showPromotedCTA: ke
				} = e, Oe = Object(c.a)(b);
				Object(s.useEffect)(() => {
					le && Oe !== b && le(pe.id)
				}, [b, le, pe.id, Oe]);
				const _e = be ? void 0 : v,
					je = n || void 0,
					Ie = Object(K.a)(re),
					Ne = Object(G.a)(re),
					we = Object(q.a)(re),
					Te = ae && K.a,
					Me = Object(I.d)(pe),
					Pe = Object(w.c)(pe),
					Se = !!pe.media && pe.media.type === U.o.RTJSON,
					Le = ge && Se,
					Re = h && !ve,
					Ae = !!pe.media && Object(U.H)(pe.media),
					De = !!pe.recommendationContext,
					Fe = {
						flairStyleTemplate: _e,
						post: pe,
						inSubredditOrProfile: h,
						isCurrentUserProfilePost: Q,
						isOverlay: se,
						shouldShowSubscribeButton: !(Y && ne) || De && ne,
						subredditOrProfile: Ee
					},
					Be = Object(r.t)(pe, oe),
					{
						source: We
					} = Be;
				let Ue = o.a.createElement(H.a, {
					className: $.a.classicThumbnail,
					crosspost: je && pe,
					isMeta: pe.isMeta,
					post: je || pe,
					redditStyle: be,
					templatePlaceholderImage: _e && _e.postPlaceholderImage,
					removeLink: Ae
				});
				Object(W.b)(pe) && (Ue = o.a.createElement(g, {
					post: pe
				}));
				const He = o.a.createElement(P.a, {
					className: Object(a.a)(Z.a.classicPostStyles, $.a.postContainer, Object(X.a)(e), f ? $.a.mFirst : void 0, t),
					isOverlay: se,
					style: {
						...Object(X.d)(e),
						...Object(X.b)(_e)
					},
					post: pe,
					onClick: ie,
					eventFactory: x
				}, o.a.createElement(R.a, {
					model: pe,
					handleVote: u,
					showBulkActionCheckbox: xe,
					isCheckboxSelected: V,
					toggleCheckbox: Ce,
					flairStyleTemplate: _e,
					redditStyle: be,
					postId: ue
				}), o.a.createElement(M.a, {
					"data-click-id": "background",
					flairStyleTemplate: _e
				}, o.a.createElement(y.a, {
					className: $.a.eventMeta,
					post: pe
				}), o.a.createElement("div", {
					className: $.a.mainBody
				}, o.a.createElement("div", {
					className: Re ? $.a.expandoContainer : $.a.thumbnailContainer
				}, !Re && Ue, o.a.createElement(k.a, {
					crosspost: je,
					className: $.a.rightExpando,
					isExpanded: !!b,
					post: pe,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)($.a.content, {
						[$.a.showBulkActionCheckbox]: xe
					}),
					"data-click-id": "body"
				}, !!pe.recommendationContext && o.a.createElement(T.a, {
					content: pe.recommendationContext.content,
					layout: z.g.Classic,
					post: pe
				}), o.a.createElement(A.c, {
					className: me ? $.a.titleWithPoll : void 0,
					format: E,
					poll: me,
					post: pe,
					redditStyle: be,
					size: A.b.Medium,
					titleColor: _e && _e.postTitleColor,
					isOverlay: se
				}, pe.source && !je && o.a.createElement(B.a, {
					href: pe.source.url,
					isSponsored: pe.isSponsored,
					postId: pe.id,
					source: pe.source
				}, Object(d.a)(pe))), o.a.createElement(S.a, ee({
					key: "PostMeta"
				}, Fe)), ae && Ie && Me && o.a.createElement(j.a, {
					thing: pe
				}), ae && Ie && Pe && o.a.createElement(N.a, {
					onIgnoreReports: de,
					reportable: pe
				}), ke && We && We.url && o.a.createElement(l.a, {
					className: $.a.adLinkWrapper
				}, o.a.createElement(m.a, {
					post: pe,
					adLinkContent: Be
				})), o.a.createElement("div", {
					className: $.a.flatlistContainer
				}, o.a.createElement(k.a, {
					className: $.a.leftExpando,
					crosspost: je,
					isExpanded: !!b,
					post: pe,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: $.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: _e,
					model: pe,
					onVoteClick: u
				}), o.a.createElement(O.a, {
					className: $.a.flatlistSeparator
				}), o.a.createElement(O.c, {
					className: $.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ne,
					hasModPostPerms: Ie,
					hasModFullPerms: we,
					hostPostData: C,
					isOverlay: !!se,
					modModeEnabled: ae,
					onIgnoreReports: de,
					onOpenReportsDropdown: ce,
					post: pe,
					showEditPost: Le,
					showEditFlair: fe,
					tooltipType: se ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(L.b)({
						editPost: !Te,
						hide: !Te,
						report: !Te
					})
				})), o.a.createElement(_.d, null))), Object(J.a)(pe, $.a, he, b, ye, te)));
				return o.a.createElement(F.b, null, He)
			});
			t.default = Object(V.a)(te)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, n) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(a.c)({
					clickTrackingId: (e, {
						comment: t
					}) => t.id
				}),
				l = Object(r.b)(c);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: n,
						comment: s,
						onClick: r,
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(n, `Comment ${s.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, s))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/moderation.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = n("./src/reddit/icons/svgs/Show/index.tsx"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = n.n(f);
			const E = b.a.wrapped(x.a, "Show", v.a);
			var C = e => o.a.createElement(h.g, null, !e.comment.isApproved && o.a.createElement(h.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(h.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(h.i, null)), o.a.createElement(h.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(h.j, null)), o.a.createElement(h.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(h.h, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(h.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(E, null)));
			const g = b.a.wrapped(l.a, "StyledDropdown", v.a),
				y = Object(a.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				k = Object(r.b)(y, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(i.a)(t.id)),
					onLockComment: () => e(Object(i.c)(t.id)),
					onRemoveComment: () => e(Object(i.e)(t.id, !1)),
					onSpamComment: () => e(Object(i.e)(t.id, !0)),
					onShowComment: () => e(Object(i.d)(t.id))
				})),
				O = Object(d.a)(g),
				_ = k(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: s,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(O, {
						isOpen: n,
						tooltipId: l
					}, o.a.createElement(C, {
						onApproveComment: () => {
							s(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = _
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/moderatorPermissions.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				N = n.n(I);
			const w = Object(h.u)(),
				T = e => `Distinguish--Dropdown--${e}`,
				M = Object(i.c)({
					currentUser: C.k,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(f.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(E.b)(T(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(v.m)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.T
				}),
				P = Object(a.b)(M, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(p.h)({
						tooltipId: T(t.id)
					}))
				}));
			t.a = w(P(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: p,
				onLockComment: b,
				onRemoveComment: h,
				onShowComment: f,
				onSpamComment: v,
				onToggleDistinguishDropdown: E,
				sendEvent: C,
				...I
			}) => {
				const w = Object(u.b)(t),
					T = t.isApproved && w,
					M = !t.isRemoved || t.bannedBy === c.l,
					P = a,
					S = e => C(Object(x.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || w) && r.a.createElement(j.a, {
					text: T ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), S("approve")
					}
				}, r.a.createElement(g.a, {
					className: N.a.icon
				})), M && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: t.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						h(), t.bannedBy === c.l ? S("confirm_remove") : S("remove")
					}
				}, r.a.createElement(k.a, {
					className: N.a.icon
				})), r.a.createElement(j.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), S("spam")
					}
				}, r.a.createElement(O.a, {
					className: N.a.icon
				}))), r.a.createElement(j.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), S(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(y.a, {
					className: N.a.icon
				})), P && r.a.createElement(j.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						f()
					}
				}, r.a.createElement(_.a, {
					className: Object(d.a)(N.a.icon, N.a.Show)
				})))
			}), "CommentModToolsFlatlist", N.a)))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = n.n(p);
			const b = e => {
				const {
					className: t,
					collapsed: n,
					comment: o,
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: l,
					onClick: p,
					style: b
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(d.a)(u.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: o.author,
					className: Object(d.a)(u.a.commentAuthorLink, t),
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: l,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: p,
					style: b
				}, o.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				x = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				E = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				C = n("./src/reddit/components/PostTopMeta/index.tsx"),
				g = n("./src/reddit/controls/MetaData/index.tsx"),
				y = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				I = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(T);
			const P = ({
				authorClassName: e,
				className: t,
				collapsed: n,
				comment: s,
				isLivestreaming: o,
				isStrong: a,
				onClick: i,
				renderedInOverlay: c
			}) => r.a.createElement(w.b, {
				className: Object(d.a)(M.a.authorHoverCard, t),
				collapsed: n,
				isCommentAuthorBlocked: Object(_.g)(s),
				postOrComment: s,
				tooltipType: c ? C.c.Lightbox : void 0
			}, r.a.createElement(N.b, {
				ignore: Object(_.f)(s) || !!s.distinguishType && s.distinguishType !== I.G.NONE,
				subredditId: s.subredditId,
				userId: s.authorId
			}, r.a.createElement(b, {
				className: e,
				collapsed: n,
				comment: s,
				isAuthorDeleted: Object(_.f)(s),
				isCommentAuthorBlocked: Object(_.g)(s),
				isLivestreaming: o,
				isStrong: a,
				onClick: i
			})));
			var S = n("./src/config.ts"),
				L = n("./src/reddit/actions/tooltip.ts"),
				R = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const A = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var D = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(D);
			const B = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(a.d)(),
					i = () => o(Object(L.h)({
						tooltipId: c
					})),
					c = A("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(F.a.cakedayIcon, e),
					src: `${S.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(R.c, {
					tooltipId: c,
					text: l
				}))
			};
			var W = n("./src/lib/addQueryParams/index.ts"),
				U = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				V = n("./src/reddit/components/HumanDate/index.tsx"),
				z = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: o,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, l = Object(a.d)(), m = A("CommentTopMeta--Created--", n.id, d), p = () => l(Object(L.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(W.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == o || o(e), q(l, n.id), c && (e.preventDefault(), l(Object(H.Y)(Object(z.b)(i), n.postId)))
						},
						onMouseEnter: p,
						onMouseLeave: p,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(V.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(R.c, {
						tooltipId: m
					}, r.a.createElement(V.b, {
						seconds: n.created
					})))
				},
				q = (e, t) => {
					window.addEventListener("focus", (function n() {
						K(e, t, n)
					}))
				},
				K = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(J);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(g.a, {
				className: X.a.crowdControlText
			}, Q._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Y = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(g.a, {
				className: $.a.editedText
			}, ee._("edited {time}", [ee._param("time", r.a.createElement(V.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				oe = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const pe = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(a.d)(),
					d = e => () => i(Object(L.f)({
						tooltipId: e
					})),
					c = () => i(Object(L.i)()),
					l = t => A(t, e.id, o),
					m = l("CommentTopMeta--Approve--"),
					p = l("CommentTopMeta--Remove--"),
					u = l("CommentTopMeta--Report--"),
					b = l("CommentTopMeta--Spam--"),
					h = d(p);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(e),
					id: m,
					onMouseEnter: d(m),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: m,
					text: Object(se.a)(e)
				})), Object(ne.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(e),
					id: p,
					onMouseEnter: h,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: p,
					text: Object(se.b)(e)
				})), Object(ne.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: h,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: b,
					text: Object(se.d)(e)
				})), Object(oe.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(e.numReports),
					id: u,
					onMouseEnter: d(u),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: u,
					text: Object(se.c)(e.numReports)
				})))
			};
			var ue, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				xe = n.n(he);
			const fe = {
					[ue.Admin]: {
						color: be.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: be.d,
						label: s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: be.a,
						label: s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: be.c,
						label: s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: be.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ve = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === I.G.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: i,
						tooltipTemplate: c
					} = fe[n], l = A(s, e.comment.id, e.renderedInOverlay), m = c(e), p = () => t(Object(L.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(xe.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, i), n === ue.Mod && r.a.createElement(Ee, null)), r.a.createElement(R.c, {
						tooltipId: l,
						text: m
					}))
				},
				Ee = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: xe.a.modAchievement,
					src: `${S.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ge = n.n(Ce);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = () => r.a.createElement(g.a, {
				className: ge.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				_e = n.n(Oe);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: c,
					ignoreLock: m,
					isInModNotesExperiment: p,
					isLivestreaming: u,
					onCommentAuthorClick: b,
					onCommentTimestampClick: I,
					permalink: N,
					renderContractorBadge: w,
					renderedInOverlay: T,
					subredditDisplayText: M
				} = e, S = Object(O.a)(), L = i.subredditId, R = Object(a.e)(e => Object(j.h)(e, {
					subredditId: L
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(d.a)(_e.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: _e.a.authorLine
				}, r.a.createElement("span", {
					className: _e.a.metaText
				}, i.deletedBy === _.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(g.c, {
					className: _e.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: _e.a.metaText,
					comment: i,
					compact: !0,
					permalink: N,
					renderedInOverlay: T
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(_e.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: _e.a.authorLine
				}, !Object(_.f)(i) && r.a.createElement(x.b, {
					className: _e.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: _e.a.baselineItem
				}, r.a.createElement(P, {
					authorClassName: _e.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: u,
					onClick: b,
					renderedInOverlay: T
				})), !Object(_.f)(i) && p && r.a.createElement(E.a, {
					postOrComment: i
				}), o && r.a.createElement(Z, null), r.a.createElement(ve, {
					className: _e.a.role,
					comment: i,
					subredditDisplayText: M,
					renderContractorBadge: w,
					renderedInOverlay: T
				}), i.isAuthorCakeday ? r.a.createElement(B, {
					className: _e.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: T
				}) : !Object(_.f)(i) && R && r.a.createElement(h.a, {
					className: _e.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						S(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(v.a, {
					className: _e.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(g.c, {
					className: _e.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: _e.a.metaText,
					comment: i,
					compact: !0,
					onClick: I,
					permalink: N,
					renderedInOverlay: T
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: _e.a.separator
				}), r.a.createElement(ke, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: _e.a.separator
				}), r.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(pe, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: T
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: T ? C.c.Lightbox : void 0
				})), c && !Object(y.o)(c) && r.a.createElement("span", {
					className: _e.a.userFlairLine
				}, r.a.createElement(f.b, {
					className: _e.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Ie = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ne = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Te = n("./src/reddit/selectors/comments.ts"),
				Me = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				Pe = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Le = n("./src/reddit/selectors/userFlair.ts"),
				Re = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Ae = n.n(Re);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = c.a.wrapped(f.b, "RightPositionedAuthorFlair", Ae.a),
				Be = c.a.span("DeletedText", Ae.a),
				We = c.a.wrapped(g.a, "MetaSeparator", Ae.a),
				Ue = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Ne.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Se.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Le.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Te.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Pe.b,
					isInModNotesExperiment: (e, {
						comment: t
					}) => Object(Me.a)(e, t.subredditId)
				}));
			t.a = Ue(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					commentPermalink: i,
					commentsPageKey: c,
					compact: m,
					flair: p,
					flairPosition: u,
					hasBadges: b,
					ignoreFlairPosition: h,
					ignoreLock: E,
					isBlockingInterstitialEnabled: y,
					isInModNotesExperiment: k,
					isLivestreaming: O,
					isPostComment: j,
					onCommentAuthorClick: I,
					onCommentTimestampClick: N,
					renderContractorBadge: w,
					renderedInOverlay: T,
					subredditDisplayText: M,
					userHasNft: S
				} = e, L = r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie.b, {
					comment: a,
					commentId: a.id
				}), r.a.createElement(Ie.a, {
					comment: a,
					commentId: a.id,
					commentsPageKey: c
				}));
				if (j) return r.a.createElement(r.a.Fragment, null, r.a.createElement(je, {
					className: Object(d.a)(n, {
						[Ae.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: p || null,
					ignoreLock: E,
					isInModNotesExperiment: k,
					isLivestreaming: O,
					onCommentAuthorClick: I,
					onCommentTimestampClick: N,
					permalink: i,
					renderContractorBadge: !!w,
					renderedInOverlay: T,
					subredditDisplayText: M
				}), L);
				if (a.isDeleted) return r.a.createElement(He, De({}, e, {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Ve, De({}, e, {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s
					})
				}));
				const R = !h && u === we.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Ae.a.container, {
						[Ae.a.collapsed]: s,
						[Ae.a.hasBadges]: b,
						[Ae.a.liveStreaming]: O
					}),
					"data-testid": "comment-top-meta"
				}, p && R && r.a.createElement(f.b, {
					flair: p,
					forceSmallEmojis: m
				}), !Object(_.f)(a) && r.a.createElement(x.b, {
					className: Ae.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(P, {
					authorClassName: S ? Ae.a.NftAuthor : void 0,
					collapsed: s,
					comment: a,
					isLivestreaming: O,
					isStrong: !!m,
					onClick: I,
					renderedInOverlay: T
				}), o && r.a.createElement(Z, null), o && r.a.createElement(g.c, {
					className: Ae.a.metaText,
					key: "crowdControlSeparator"
				}), p && !R && r.a.createElement(Fe, {
					flair: p,
					forceSmallEmojis: m
				}), !m && r.a.createElement(v.a, {
					className: Ae.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(g.c, {
						className: Ae.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), L, r.a.createElement(ve, {
					className: Ae.a.authorRole,
					comment: a,
					subredditDisplayText: M,
					renderContractorBadge: !!w,
					renderedInOverlay: T
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !j && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.b, {
					className: Ae.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(g.c, {
					className: Ae.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Ae.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: T,
					isBlockingInterstitialEnabled: y
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: Ae.a.separator
				}), r.a.createElement(ke, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: Ae.a.separator
				}), r.a.createElement(te, {
					editedAt: a.editedAt
				}))), r.a.createElement(pe, {
					comment: a,
					ignoreLock: E,
					renderedInOverlay: T
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: T ? C.c.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: c
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Be, null, a.deletedBy === _.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Ae.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					}), n && ze({
						childrenInfo: t
					}))
				},
				Ve = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(_.f)(t),
						collapsed: a
					})), r.a.createElement(g.b, {
						className: Ae.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(g.c, {
						className: Ae.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
						key: "Created",
						className: Ae.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: d
					}), ze({
						childrenInfo: s
					}))
				},
				ze = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(We, {
						className: Ae.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, n) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./node_modules/lodash/throttle.js"),
				m = n.n(l),
				p = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.K;
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, f), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: n
					} = this.state;
					return n ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
						className: b.a.seeMore,
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var E = v,
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./node_modules/lodash/noop.js"),
				y = n.n(g),
				k = n("./src/lib/makeCommentsPageKey/index.ts"),
				O = n("./src/lib/makeDraftKey/index.ts"),
				_ = n("./src/reddit/actions/comment/index.ts"),
				j = n("./src/reddit/actions/comment/authoring.ts"),
				I = n("./src/reddit/actions/comment/moderation.ts"),
				N = n("./src/reddit/actions/gold/modals.ts"),
				w = n("./src/reddit/actions/modal.ts"),
				T = n("./src/reddit/actions/reportFlow/index.ts"),
				M = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				S = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				D = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = n("./src/reddit/components/ModModeReports/helpers.ts"),
				B = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = n("./src/reddit/contexts/InsideOverlay.tsx"),
				U = n("./src/reddit/contexts/PageLayer/index.tsx"),
				H = n("./src/reddit/helpers/correlationIdTracker.ts"),
				V = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				z = n("./src/reddit/helpers/overlay/index.ts"),
				G = n("./src/reddit/helpers/trackers/lightbox.ts"),
				q = n("./src/reddit/models/PostDraft/index.ts"),
				K = n("./src/reddit/models/Comment/index.ts"),
				J = n("./src/reddit/selectors/activeModalId.ts"),
				X = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				Y = n("./src/reddit/selectors/tooltip.ts"),
				$ = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = n("./src/reddit/selectors/user.ts"),
				ne = n("./src/reddit/components/OverflowMenu/index.tsx"),
				se = n("./src/reddit/components/ReportFlow/index.tsx"),
				oe = n("./src/reddit/components/ReportFlow/new.tsx"),
				re = n("./src/reddit/components/ShareMenu/index.tsx"),
				ae = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = n("./src/reddit/controls/Dropdown/Row.tsx"),
				de = n("./src/reddit/helpers/trackers/modTools.ts"),
				ce = n("./src/reddit/layout/row/Inline/index.tsx"),
				le = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = n("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = n.n(ue),
				he = n("./src/lib/constants/icons.ts"),
				xe = n("./src/lib/lessComponent.tsx"),
				fe = n("./src/reddit/icons/fonts/index.tsx"),
				ve = n("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Ee = xe.a.wrapped(ne.b, "OverflowMenu", be.a),
				Ce = xe.a.wrapped(S.a, "ModToolsFlatlist", be.a),
				ge = xe.a.wrapped(D.a, "ModActionsMenu", be.a),
				ye = xe.a.wrapped(ie.b, "DropdownRow", be.a),
				ke = xe.a.wrapped(ce.a, "Flatlist", be.a),
				Oe = xe.a.button("Button", be.a),
				_e = Object(U.u)(),
				je = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				we = e => `View--Reports--${e}`,
				Te = Object(a.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(J.a)(e) === je(t.id),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(X.C)(e, {
						commentId: t.postId
					}),
					isLoggedIn: te.K,
					moderatorPermissions: (e, {
						comment: t
					}) => Object(Q.m)(e, {
						subredditId: t.subredditId
					}),
					currentUser: te.k,
					modModeEnabled: U.T,
					postIsLocked: (e, {
						comment: t
					}) => Object(Z.B)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(X.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var n, s;
						return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === t.id
					},
					subreddit: U.r,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(Z.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.b
				});
			class Me extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(H.e)(H.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(G.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.e)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: n,
						modModeEnabled: s,
						showModTools: r
					} = this.props, a = Object(V.a)(n), i = !!t && t.displayText === e.author;
					if (r && a) return s ? o.a.createElement(Ce, {
						comment: e,
						isCommentAuthor: i
					}) : o.a.createElement(ge, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(me.a, null), o.a.createElement(P.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: n
					} = this.props, s = Object(F.a)(e);
					if (n && Object(F.c)(e) && !t) return o.a.createElement(L.a, {
						text: `${s}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === we(e.id),
						id: we(e.id)
					}, o.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: we(e.id)
					}), e.ignoreReports ? o.a.createElement(le.a, null) : o.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: n,
						modModeEnabled: s,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(V.a)(n), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (a && d && !e.bannedBy && (c || i && !s)) return o.a.createElement(L.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(ve.a, null), o.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ie(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: n,
						commentsPageKey: s,
						currentUser: r,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, b = Object(V.a)(c), h = !!r && r.displayText === e.author, x = (!l && !e.isLocked || b && i) && !(Object(K.g)(e) && u), f = r && e.isGildable && !(Object(K.g)(e) && u);
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement(ke, null, x && o.a.createElement(Oe, {
						onClick: this.handleReply,
						disabled: d
					}, C.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && o.a.createElement(Oe, {
						onClick: this.handleGild
					}, C.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(re.a, {
						dropdownId: `${s}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(Oe, {
						onClick: this.sendCommentEventWithNameShare
					}, C.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Ee, {
						dropdownId: Ne(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && o.a.createElement(ye, {
						displayText: C.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe.a, {
						name: he.a.report
					})), o.a.createElement(ye, {
						displayText: e.isSaved ? C.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : C.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(fe.a, {
						name: he.a.saved
					}) : o.a.createElement(fe.a, {
						name: he.a.save
					})), h && o.a.createElement(ye, {
						displayText: C.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe.a, {
						name: he.a.edit
					})), h && o.a.createElement(ye, {
						displayText: C.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe.a, {
						name: he.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(R.a, {
						actionText: C.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: C.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: C.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: C.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: a,
						toggleModal: p,
						trackClick: y.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Pe = _e(Object(r.b)(Te, (e, {
					comment: t,
					commentsPageKey: n
				}) => ({
					deleteComment: () => n && e(Object(j.h)(t.id, t.postId)),
					onDistinguishComment: (n, s) => e(Object(I.b)(t.id, n, s)),
					onIgnoreReports: () => e(Object(I.g)(t.id)),
					onGildClick: n => e(Object(N.d)({
						correlationId: n,
						thingId: t.id
					})),
					onReportClick: () => e(Object(T.c)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(M.h)({
						tooltipId: Ie(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(M.h)({
						tooltipId: we(t.id)
					})),
					onToggleSave: () => e(Object(_.m)(t.id)),
					handleDelete: () => {
						e(Object(w.i)(je(t.id))), e(Object(M.h)({
							tooltipId: Ne(n, t.id)
						}))
					},
					handleEdit: n => {
						const s = Object(k.a)(t.postId, t.id, {}),
							o = {
								commentId: t.id,
								draftKey: Object(O.a)(q.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: t.media && t.media.rteMode,
								commentsPageKey: s
							};
						e(Object(z.a)(n)), e(Object(j.f)(o))
					},
					handleReply: n => {
						const s = Object(k.a)(t.postId, t.id, {}),
							o = {
								parentCommentId: t.id,
								commentsPageKey: s
							};
						e(Object(z.a)(n)), e(Object(j.g)(o))
					},
					toggleDeleteCommentModal: () => e(Object(w.i)(je(t.id)))
				}))(Object(ae.c)(Object(W.b)(Me)))),
				Se = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = n("./src/reddit/components/RichTextJson/index.tsx"),
				Re = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = n("./src/reddit/selectors/commentSelector.ts"),
				De = n("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Fe = n.n(De);
			const Be = xe.a.wrapped(Se.a, "TopMeta", Fe.a),
				We = xe.a.div("ProfileCommentWrapper", Fe.a),
				Ue = xe.a.div("CommentBody", Fe.a),
				He = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: X.e
				})),
				Ve = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = He(e => {
				const {
					comment: t,
					commentsPageKey: n,
					flair: s,
					isExpanded: r,
					showFlatlist: a,
					showModTools: c
				} = e, l = n => o.a.createElement(Le.a, {
					className: n,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ve(e)
				});
				return o.a.createElement(We, {
					className: Object(i.a)({
						[Fe.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: n,
					flair: s,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ue, null, r ? l() : o.a.createElement(E, {
					height: d.Ub,
					isExpanded: r
				}, l)), !t.isDeleted && a && o.a.createElement(Pe, {
					comment: t,
					commentsPageKey: n,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Media/index.tsx"),
				p = n("./src/reddit/components/PostMeta/index.tsx"),
				u = n("./src/reddit/components/PostTitle/index.tsx"),
				b = n("./src/reddit/components/SourceLink/index.tsx"),
				h = n("./src/reddit/components/Thumbnail/index.tsx"),
				x = n("./src/lib/constants/index.ts"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/CrosspostBox/index.m.less"),
				g = n.n(C),
				y = n("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 8,
				_ = 1,
				j = y.a.div("Container", g.a),
				I = y.a.div("PostMetaWrapper", g.a),
				N = y.a.wrapped(u.c, "PostTitle", g.a),
				w = y.a.div("FlatList", g.a),
				T = y.a.div("FlatItem", g.a),
				M = y.a.span("FlatListDotSpacer", g.a),
				P = y.a.wrapped(j, "LinkContainer", g.a),
				S = y.a.div("Content", g.a),
				L = y.a.div("ThumbnailContainer", g.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Nb.TOPIC),
					shouldOpenPostInNewTab: E.db
				}),
				A = Object(a.b)(R);
			t.c = Object(f.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: s,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return a && !a.media ? r.a.createElement(P, {
					className: c
				}, r.a.createElement(S, null, r.a.createElement(I, null, r.a.createElement(p.a, d)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), U(e)) : r.a.createElement(j, {
					className: c
				}, r.a.createElement(I, null, r.a.createElement(p.a, d)), D(a), F(e), B(e))
			}));
			const D = e => r.a.createElement(N, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, s = {
						...t,
						post: n,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, k({}, s, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(w, null, r.a.createElement(T, null, s.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [s.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(M, null), r.a.createElement(T, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, s.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [s.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(L, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, n) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = n.n(p);
			const b = i.a.div("DistinguishWrapper", u.a),
				h = i.a.wrapped(m.a, "Inline", u.a),
				x = i.a.wrapped(c.a, "RadioOff", u.a),
				f = i.a.wrapped(l.a, "RadioOn", u.a),
				v = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(x, null), e.text),
				E = i.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: s,
						isUserEmployee: i,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: n
					}, o.a.createElement(v, {
						onClick: () => p(r.G.NONE, null),
						selected: !c && !s,
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(v, {
						onClick: () => p(r.G.MODERATOR, null),
						selected: c && !l,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(v, {
						onClick: () => p(r.G.MODERATOR, !0),
						selected: c && l,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && o.a.createElement(v, {
						onClick: () => p(r.G.ADMIN, null),
						selected: s && !l,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && d && m && o.a.createElement(v, {
						onClick: () => p(r.G.ADMIN, !0),
						selected: s && l,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(d.a)(E);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(C, {
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.G.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.G.ADMIN ? m("admin_distinguish") : i && e !== r.G.MODERATOR ? m("undistinguish") : n && e !== r.G.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, o.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), o.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), o.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				opacity: "0.8"
			}, o.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), o.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), o.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), o.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), o.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				stopColor: "#FF538C"
			}), o.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = n.n(l);
			var p = ({
				children: e,
				className: t
			}) => r.a.createElement("div", {
				className: Object(i.a)(m.a.Wrapper, t)
			}, r.a.createElement(d.a, {
				className: m.a.BackgroundPlaceholder,
				isLoading: !1,
				layout: c.g.Classic
			}), r.a.createElement("div", {
				className: m.a.PrimaryText
			}, e));
			var u = ({
				className: e,
				profileName: t,
				timeSort: n = a.hc.ALL
			}) => r.a.createElement(p, {
				className: e
			}, n === a.hc.ALL ? s.fbt._("hmm... {profileName} hasn't commented on anything", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "1MHn3t"
			}) : s.fbt._("hmm... {profileName} hasn't commented recently", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "qN3uL"
			}));
			var b = ({
				className: e,
				profileName: t,
				timeSort: n = a.hc.ALL
			}) => r.a.createElement(p, {
				className: e
			}, n === a.hc.ALL ? s.fbt._("hmm... {profileName} hasn't posted anything", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "28vBEd"
			}) : s.fbt._("hmm... {profileName} hasn't posted recently", [s.fbt._param("profileName", `u/${t}`)], {
				hk: "38GhqN"
			}));
			var h = ({
					className: e,
					text: t
				}) => r.a.createElement(p, {
					className: e
				}, t),
				x = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = n.n(f);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var C = () => r.a.createElement("div", {
				className: v.a.container
			}, r.a.createElement(x.a, {
				className: v.a.hideIcon
			}), r.a.createElement("h3", {
				className: v.a.title
			}, E._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: v.a.subtitle
			}, E._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/telemetry/models/Outbound.ts"),
				v = n("./src/reddit/components/ExpandoButton/index.m.less"),
				E = n.n(v);
			const C = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(p.b)(t.permalink), t.id))
				})),
				g = (e, t = !1, n) => {
					const s = Object(d.a)(E.a.icon, E.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: s
					});
					if (n.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: s
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: s
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: s
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: s
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: s
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: s
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: s
							})
					}
				};
			t.a = C(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: p,
					post: h,
					toggle: v,
					useMediaIcons: C
				} = e, y = n || h, k = Object(a.e)(x.b), O = t => {
					k && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, _ = o && !!n;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type || "liveaudio" === y.media.type) && !Object(u.a)(y)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: v
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: E.a.icon
				}) : C ? r.a.createElement(r.a.Fragment, null, g(y.media && y.media.type, _, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(E.a.icon, E.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: E.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(E.a.icon, E.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(y.permalink),
					rel: "nofollow",
					onClick: O
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: E.a.icon
				}))
			})
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = n.n(p),
				b = n("./src/lib/lessComponent.tsx");
			const h = Object(m.u)(),
				x = Object(a.c)({
					layout: m.R
				}),
				f = Object(r.b)(x);
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${u.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						n = d.g - t,
						s = l.a + n + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${s}px) {\n              .${u.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.q+d.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.r}px) / 2);\n              }\n\n              .${u.a.Component}.${u.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.q+d.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: u.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(f(b.a.wrapped(v, "Component", u.a)))
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, n) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = n.n(c);
			const m = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => o.a.createElement(i.a, {
				className: Object(r.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === d.g.Classic,
					[l.a.compactLayout]: t === d.g.Compact,
					[l.a.largeLayout]: t === d.g.Large
				}),
				content: e,
				rtJsonElementProps: m(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, n) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/components/PostContainer/index.tsx"),
				p = n("./src/reddit/components/PostTitle/index.tsx"),
				u = n("./src/reddit/components/PostTopMeta/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/Post/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = n.n(v),
				C = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				k = n("./src/reddit/components/OverviewCommentPost/index.m.less"),
				O = n.n(k);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = c.a.wrapped(x.a, "InternalLink", O.a), I = c.a.div("Wrapper", O.a), N = c.a.div("Row", O.a), w = c.a.wrapped(C.a, "CommentIcon", O.a), T = c.a.div("TitleContainer", O.a), M = c.a.div("PostTitleContainer", O.a), P = c.a.wrapped(p.c, "PostTitle", O.a), S = c.a.wrapped(u.d, "PostTopMeta", O.a), L = c.a.wrapped(u.a, "MetaSeparator", O.a), R = Object(r.b)(() => Object(a.c)({
				comment: g.b,
				isBlockingInterstitialEnabled: y.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.cb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = e;
				if (n) return o.a.createElement(s.Fragment, null, o.a.createElement(L, null), o.a.createElement(S, {
					metaSeparatorClassName: O.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: n
				}))
			}, D = e => {
				const {
					comment: t,
					profileName: n,
					isBlockingInterstitialEnabled: s,
					showModalOnAuthorLinkClick: r
				} = e;
				if (!t) return null;
				const a = n || t.author,
					i = `/user/${a}/`;
				return o.a.createElement(j, {
					"data-click-id": "user",
					to: i,
					onClick: e => {
						s && (e.preventDefault(), r(i))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(h.b)(R(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: n,
					onClickPost: s,
					post: r
				} = e;
				return o.a.createElement(m.a, {
					className: Object(i.a)(E.a.compactPostStyles, O.a.overviewCommentPost, {
						[O.a.banned]: !!e.post.bannedBy,
						[O.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: s,
					eventFactory: n
				}, o.a.createElement(I, {
					style: {
						background: Object(f.e)(e)
					}
				}, o.a.createElement(N, null, o.a.createElement(w, null), o.a.createElement(T, null, _._("{postAuthor} commented on {postTitle} {postMeta}", [_._param("postAuthor", D({
					...e
				})), _._param("postTitle", o.a.createElement(M, null, o.a.createElement(P, {
					outboundLinkClassName: O.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: O.a.postTitleTitle
				}))), _._param("postMeta", A(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
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
				}) : o.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = n("./src/reddit/components/PostBadges/index.tsx"),
				c = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Subreddit/index.ts"),
				E = n("./src/reddit/components/PostMeta/index.m.less"),
				C = n.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: s,
					isCurrentUserProfilePost: E,
					isOverlay: g,
					isTopicPage: y,
					post: k,
					shouldShowSubscribeButton: O,
					subredditOrProfile: _,
					tooltipType: j
				} = e, I = !!y, N = Object(f.a)();
				return o.a.createElement("div", {
					className: C.a.metaContainer
				}, !s && !k.isSponsored && _ && o.a.createElement(a.a, {
					postId: k.id,
					subredditName: _.name
				}, o.a.createElement(m.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: _.url,
						state: N
					}
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(l.a, null), !s && !k.isSponsored && _ && O && !E && o.a.createElement(p.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(v.h)(_) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: k.id,
					size: b.d.XXS,
					small: !0
				}), !s && !k.isSponsored && o.a.createElement(h.b, null), !s && !k.isSponsored && o.a.createElement(i.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(c.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: j
				}), o.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!s,
					post: k,
					tooltipType: j
				}), !I && o.a.createElement(r.a, {
					hideCta: n,
					thing: k,
					tooltipType: g ? c.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "g", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = n.n(h);
			const f = r.a.wrapped(d.a, "Icon", x.a),
				v = r.a.wrapped(c.a, "Icon", x.a),
				E = r.a.wrapped(l.a, "Icon", x.a),
				C = r.a.wrapped(m.a, "Icon", x.a),
				g = r.a.wrapped(p.a, "Icon", x.a),
				y = r.a.wrapped(u.a, "Icon", x.a),
				k = () => o.a.createElement(i.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				O = () => o.a.createElement(i.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				_ = () => o.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				j = r.a.wrapped(a.b, "DropdownRow", x.a),
				I = r.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: E,
					shouldShowUpvoteRatioOnHover: C
				} = e, g = `upvote-button-${t.id}${f?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: g,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: u,
					postId: E,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: C
					}),
					shouldShowUpvoteRatioOnHover: C
				}))
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/throttle.js"),
				d = n.n(i),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./node_modules/reselect/es/index.js"),
				b = n("./src/config.ts"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				x = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/constants/index.ts"),
				v = n("./src/reddit/actions/tooltip.ts"),
				E = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				C = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/models/Profile/index.ts"),
				j = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/selectors/userPrefs.ts"),
				T = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				M = n.n(T);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(g.u)({
					routeName: g.Y,
					privateListingType: g.j
				}),
				L = Object(u.c)({
					isDropdownMenuOpen: e => Object(I.a)(e) === A,
					isOwnProfile: (e, t) => Object(N.Q)(e, t.profileName),
					isSnoovatar30Enabled: j.d.snoovatar30,
					isSubscriptionsPinned: w.b
				}),
				R = Object(h.a)(y.a),
				A = "profile-nav-menu-tooltip",
				D = C.g + C.r + C.q;
			var F;
			t.a = S(Object(m.b)(L, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(({
					isDropdownMenuOpen: e,
					isOwnProfile: t,
					privateListingType: n,
					profileName: s,
					routeName: r,
					toggleTooltip: i,
					isSnoovatar30Enabled: m,
					isSubscriptionsPinned: p
				}) => {
					const [u, b] = Object(c.useState)(!1), h = Object(c.useRef)(null), [f, v] = Object(c.useState)([]), [g, y] = Object(c.useState)([]);
					return Object(c.useEffect)(() => {
						const e = U({
							profileName: s,
							isOwnProfile: t,
							routeName: r,
							privateListingType: n,
							isSnoovatar30Enabled: m
						});
						v(e.filter(e => e.position === F.MENU));
						const i = [],
							c = d()(() => {
								const t = document.documentElement.clientWidth - 2 * C.q,
									n = t > D ? D : t;
								let s = 42;
								i.forEach(t => {
									s += t.offsetWidth;
									const o = e.find(e => e.text.toString().toLowerCase() === t.text);
									o.position = s > n ? F.DROPDOWN : F.MENU
								});
								const o = e.filter(e => e.position === F.MENU);
								v(e => a()(o, e) ? e : o);
								const r = e.filter(e => e.position === F.DROPDOWN);
								y(e => a()(r, e) ? e : r), b(r.length > 0)
							}, 50);
						return o.a.read(() => {
							const e = h.current;
							e && (e.childNodes.forEach((e, t) => {
								i.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), c())
						}), window.addEventListener("resize", c), () => {
							window.removeEventListener("resize", c)
						}
					}, [s, t, r, n, m]), l.a.createElement("div", {
						className: M.a.container
					}, l.a.createElement(E.a, {
						bladeOpen: !1,
						offsetLeft: p ? C.u : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: M.a.menuContainer,
							ref: h
						}, f.map(e => l.a.createElement(B, P({}, e, {
							key: e.key
						})))), u && l.a.createElement("button", {
							className: Object(x.a)(M.a.mainLink),
							id: A,
							onClick: () => i(A)
						}, l.a.createElement(O.a, {
							name: "overflow_horizontal"
						})), u && l.a.createElement(R, {
							className: M.a.dropdown,
							isOpen: e,
							tooltipId: A
						}, g.map(e => l.a.createElement(W, P({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(F || (F = {}));
			const B = ({
					isActive: e,
					text: t,
					url: n,
					internal: s
				}) => s ? l.a.createElement(k.a, {
					className: Object(x.a)(M.a.mainLink, {
						[M.a.isActive]: e
					}),
					to: n
				}, t) : l.a.createElement("a", {
					className: Object(x.a)(M.a.mainLink, {
						[M.a.isActive]: e
					}),
					href: n
				}, t),
				W = ({
					isActive: e,
					internal: t,
					url: n,
					text: s
				}) => t ? l.a.createElement(p.a, {
					className: Object(x.a)(M.a.dropdownLink, {
						[M.a.isActive]: e
					}),
					to: n,
					rel: "nofollow noopener noreferrer",
					role: "listitem"
				}, s) : l.a.createElement("a", {
					className: Object(x.a)(M.a.dropdownLink),
					href: n,
					rel: "nofollow noopener noreferrer",
					role: "listitem",
					target: "_blank"
				}, s),
				U = ({
					profileName: e,
					isOwnProfile: t,
					routeName: n,
					privateListingType: o,
					isSnoovatar30Enabled: r
				}) => {
					const a = t ? [{
						internal: !0,
						isActive: n === f.Nb.PROFILE_PRIVATE && o === _.b.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${e}/saved/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: n === f.Nb.PROFILE_PRIVATE && o === _.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${e}/hidden/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: n === f.Nb.PROFILE_PRIVATE && o === _.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${e}/upvoted/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: n === f.Nb.PROFILE_PRIVATE && o === _.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${e}/downvoted/`,
						position: F.MENU
					}] : [];
					t ? (a.push({
						internal: !0,
						isActive: n === f.Nb.PROFILE_PRIVATE && o === _.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${e}/gilded/`,
						position: F.MENU
					}), a.push({
						internal: !0,
						isActive: n === f.Nb.PROFILE_PRIVATE && o === _.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${e}/gilded/given/`,
						position: F.MENU
					})) : a.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${e}/gilded/`,
						position: F.MENU
					});
					const i = r ? [{
						internal: !0,
						isActive: n === f.Nb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: s.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: `/user/${e}/snoo/`,
						position: F.MENU
					}] : [];
					return [{
						internal: !0,
						isActive: n === f.Nb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${e}/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: n === f.Nb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${e}/posts/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: n === f.Nb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${e}/comments/`,
						position: F.MENU
					}, ...i, ...a]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/SidebarContainer/index.tsx"),
				d = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = n("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				u = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts");
			const f = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				v = e => {
					const t = Object(a.e)(e => Object(x.l)(e));
					return r.a.createElement(i.a, {
						className: e.className
					}, r.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: h.a.PROFILE
						}
					}), r.a.createElement(d.a, {
						profileName: e.profileName
					}), r.a.createElement(c.a, {
						profileName: e.profileName
					}), !t && r.a.createElement(m.a, null, r.a.createElement(l.a, {
						profileName: e.profileName
					})), r.a.createElement(m.a, null, r.a.createElement(u.a, {
						profileName: e.profileName
					})), r.a.createElement(p.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			v.defaultProps = {
				isOverlay: !1
			}, t.a = v
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/take.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: n,
					headerButton: o,
					items: d,
					minimizedLength: b,
					onLoadMore: h,
					pending: x,
					renderItem: f,
					title: v
				} = e, [E, C] = Object(a.useState)(!1), g = d.length > b || n, y = (!g || E ? d : r()(d, b)).map(e => f({
					item: e
				})), k = () => {
					E || C(!0), E && !n && C(!1), n && h && h()
				};
				return i.a.createElement(c.a, {
					className: t,
					headerButton: o,
					title: v
				}, y, i.a.createElement(p.a, null, i.a.createElement(u.a, null, g && (() => {
					const e = !E || n && h ? s.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : s.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return i.a.createElement(l.r, {
						onClick: k
					}, x ? i.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: d.Tb
			}, t.a = b
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = n("./src/reddit/models/User/index.ts"),
				p = n("./src/reddit/selectors/profile.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = n.n(h);
			const f = Object(i.c)({
					currentUser: b.k,
					moderated: p.n,
					subscriptions: u.e,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				v = Object(a.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				E = ({
					item: e
				}) => r.a.createElement(l.a, {
					id: e.id,
					iconUrl: e.iconUrl,
					isNSFW: e.isNSFW,
					key: `${e.type}-${e.name}`,
					name: e.name,
					subscribers: e.subscribers,
					isSubscribed: e.isSubscribed,
					widget: void 0,
					sendEvent: () => void 0,
					type: e.type
				});
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: o,
					subscriptions: a,
					hasMoreModerated: i,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const p = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					u = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(a));
				return r.a.createElement(c.a, {
					className: x.a.container,
					title: p,
					items: u,
					renderItem: E,
					hasMoreItems: i,
					onLoadMore: d,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/selectors/profile.ts"),
				u = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = n.n(u);
			const h = Object(d.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				x = Object(a.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.g)(t.profileName, !0))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = ({
					item: e
				}) => r.a.createElement("div", {
					className: b.a.listItem,
					key: e.url
				}, r.a.createElement("img", {
					className: b.a.icon,
					src: e.icon
				}), r.a.createElement("div", {
					className: b.a.description
				}, r.a.createElement(i.a, {
					className: b.a.name,
					to: e.url
				}, e.displayText), r.a.createElement("div", {
					className: b.a.meta
				}, s.fbt._({
					"*": "{communities} communities",
					_1: "1 community"
				}, [s.fbt._plural(e.subredditCount, "communities")], {
					hk: "1eyxrS"
				}))));
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: o,
					onLoadMore: a,
					profileName: i
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: a,
					pending: n,
					renderItem: f,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", i)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = n("./src/reddit/selectors/gold/powerups/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				b = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				h = n.n(b);
			const x = Object(u.c)({
				subreddits: function(e, {
					profileName: t
				}) {
					const n = Object(p.sb)(e, {
							userName: t
						}),
						s = Object(m.f)(e);
					return (n && s ? s[n.id] : null) || []
				}
			});

			function f({
				item: e
			}) {
				const t = e.subredditInfo,
					n = r.a.createElement(c.b, {
						iconUrl: t.styles.icon,
						className: h.a.subredditIcon
					});
				return r.a.createElement(l.a, {
					className: h.a.communityItemContainer,
					key: t.id
				}, r.a.createElement("div", {
					className: h.a.iconContainer
				}, r.a.createElement(i.a, {
					to: t.path
				}, n)), r.a.createElement("div", {
					className: h.a.communityDescription
				}, r.a.createElement("div", {
					className: h.a.communityName
				}, r.a.createElement(i.a, {
					to: t.path
				}, t.prefixedName)), r.a.createElement("div", {
					className: h.a.subscriberCount
				}, s.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [s.fbt._plural(e.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(a.b)(x)(({
				subreddits: e
			}) => ! function(e) {
				return e.length > 0 && e.every(e => e.subredditInfo)
			}(e) ? null : r.a.createElement(d.a, {
				title: s.fbt._("Supports Communities", null, {
					hk: "1vCNdZ"
				}),
				items: e,
				renderItem: f
			}))
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/controls/Typography/index.tsx"),
				l = n("./src/reddit/selectors/telemetry.ts");
			var m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = n("./node_modules/lodash/isEqual.js"),
				b = n.n(u);
			const h = Object(i.b)(i.d, b.a);
			var x = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = n.n(f),
				E = n("./src/lib/lessComponent.tsx"),
				C = n("./src/lib/opener/index.ts");
			const g = Object(i.c)({
				trophyCase: (e, {
					profileName: t
				}) => Object(x.r)(e, Object(x.m)(e, t))
			}, h);
			t.a = Object(a.b)(g)(({
				trophyCase: e
			}) => 0 === e.length ? null : r.a.createElement(d.a, {
				title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", `${e.length}`)], {
					hk: "mzh3V"
				}),
				items: e,
				renderItem: I
			}));
			const y = E.a.wrapped(p.a, "TrophyItem", v.a),
				k = E.a.div("TrophyIcon", v.a),
				O = E.a.h5("TrophyName", v.a),
				_ = E.a.div("TrophyContent", v.a),
				j = E.a.wrapped(c.c, "Description", v.a),
				I = ({
					item: e
				}) => {
					const t = Object(m.a)(),
						n = r.a.createElement("img", {
							src: e.icon,
							title: e.name
						});
					return r.a.createElement(y, {
						key: e.id
					}, r.a.createElement(k, null, e.url ? r.a.createElement("a", {
						target: C.d.BLANK,
						rel: C.c,
						href: e.url,
						onClick: () => t((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.S(t),
							trophy: e
						}))({
							id: e.id,
							name: e.name
						}))
					}, n) : n), r.a.createElement(_, null, r.a.createElement(O, null, e.name), r.a.createElement(j, null, e.description)))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(i);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => o.a.createElement("div", t, o.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				p = n("./src/reddit/actions/subscription/index.ts");
			var u = Object(a.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = n.n(k);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(N, _({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(x.t, {
					className: O.a.bottomButton,
					kind: x.b.Button,
					priority: x.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(d.c)({
					hideNSFWPref: g.C,
					nightmode: g.X
				}),
				N = Object(a.b)(I)(e => r.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(E.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: h.t
				}, r.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: O.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: O.a.nsfwFlair,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(x.t, {
					className: O.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(u, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === s.a.PROFILE ? Object(o.d)(e) : Object(o.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				m = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = n("./src/reddit/models/ExternalAccount/index.ts"),
				u = n("./src/reddit/selectors/externalAccount.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				C = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				g = n.n(C);
			var y = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let r, a = t.username,
						i = "";
					return s !== p.a.Twitter ? null : (r = o.a.createElement(v.a, {
						className: g.a.twitterLogo
					}), i = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = `@${t.username}`, o.a.createElement(E.a, null, o.a.createElement("span", {
						className: g.a.icon
					}, r), o.a.createElement(x.b, {
						className: g.a.link,
						href: t.link,
						onClick: n
					}, o.a.createElement("div", {
						className: g.a.linkTitle
					}, o.a.createElement("span", {
						className: g.a.name
					}, a), o.a.createElement(f.a, {
						className: g.a.linkIcon
					})), o.a.createElement("div", {
						className: g.a.linkDescription
					}, i))))
				},
				k = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = n.n(k);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(a.c)({
				twitterAccount: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(u.c)(e, {
					profileName: t.name
				}) : null,
				user: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(b.sb)(e, {
					userName: t.name
				}) : null
			}), I = Object(r.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, n) => m.m(n(), t))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(I(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? o.a.createElement(i.a, null, o.a.createElement(c.b, null, o.a.createElement(c.a, null, _._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && o.a.createElement("div", {
					className: O.a.account
				}, o.a.createElement(y, {
					provider: p.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/InsideOverlay.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/Post/index.tsx"),
				m = n("./src/reddit/selectors/activeModalId.ts"),
				p = n("./src/reddit/selectors/chatPost.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/selectors/postFlair.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/showPromotedCTA.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: f.K,
					showPromotedCTA: x.a,
					moderatorPermissions: u.l,
					modModeEnabled: c.T,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: b.a,
					showMedia: c.s,
					flairStyleTemplate: c.V
				},
				E = Object(s.b)(() => Object(o.c)(v), (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const s = n === i.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(r.fb)(t)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(E(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				a = 4,
				i = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
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
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = a.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const a = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, c)
				},
				u = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.f)(n));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, n, s, r, a) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, r, a)) : i(e, n, r, a) : null,
				i = (e, t, n, s) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(o.e)(i, {
							commentId: e
						}),
						c = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.o(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.o(e)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const o = e => e.category === s.Supporter,
				r = e => e.category === s.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/gold/constants.ts"),
				r = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var i = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case o.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(r.a).map(e => e.type),
								d = s.filter(r.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: i,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let o = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const n = a.filter(r.a),
									s = n.map(({
										type: e
									}) => e),
									i = a.filter(r.b),
									d = i.map(({
										type: e
									}) => e),
									c = l(n),
									m = l(i);
								o = {
									...o,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: o
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: o,
								pendingSupporterType: r
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: o,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: o
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const o = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: o.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var n, s;
					return t ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s, o;
					return t && n ? null === (o = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === o ? void 0 : o[n] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				u = Object(s.a)([d, p], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						o = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === o
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([i, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: o
					} = e, {
						supporterTypes: r,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: v(n, r, o, c || i),
						achievementFlairs: v(s, a, o, l || d)
					}
				}),
				x = Object(s.a)([c], e => !!e && e.isHidden),
				f = Object(s.a)([i, c, u], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				v = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				E = (e, {
					commentId: t
				}) => {
					const n = Object(o.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						r = null == n ? void 0 : n.authorId;
					return !(!s || !r) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, o, r;
						return t && n ? null === (r = null === (o = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === o ? void 0 : o[n]) || void 0 === r ? void 0 : r[t] : null
					})(e, {
						subredditId: s,
						userId: r
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.f798231ed73cbd0bb55c.js.map