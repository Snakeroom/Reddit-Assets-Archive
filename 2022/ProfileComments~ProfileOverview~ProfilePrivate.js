// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.8cc453dbae397e3d1425.js
// Retrieved at 4/20/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
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
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
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
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
					...s
				} = e;
				return o.a.createElement(i.b, c({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/CreatorStats/loader.tsx"),
				b = s("./src/config.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(E),
				g = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				C = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, r = () => Math.floor(10 * Math.random() + 1), a = Object(x.e)(f.eb), [d, c] = Object(n.useState)(!1), [l, m] = Object(n.useState)(r());
					return Object(n.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), m(r())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: v.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement("div", {
						className: v.a.classicSpeaker
					}, d && o.a.createElement(C.a, {
						className: Object(i.a)(v.a.speakerRings, {
							[v.a.nightMode]: a
						})
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: v.a.snoovatar,
						src: `${b.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: y._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && o.a.createElement("div", {
						className: v.a.muteContainer
					}, o.a.createElement(g.a, {
						className: v.a.muteIcon
					})))) : o.a.createElement("div", {
						className: v.a.endedClassicContainer
					}, o.a.createElement(g.a, {
						className: v.a.muteIcon
					}))
				},
				O = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				k = s("./src/reddit/components/ExpandoButton/index.tsx"),
				w = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				S = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				I = s("./src/reddit/components/ModModeReports/index.tsx"),
				P = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				R = s("./src/reddit/components/PostMeta/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				D = s("./src/reddit/components/PostTitle/index.tsx"),
				B = s("./src/reddit/components/PostTopMeta/index.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				H = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				V = s("./src/reddit/models/Media/index.ts"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				G = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				J = s("./src/reddit/helpers/search/renderMedia.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: f,
					eventFactory: E,
					first: v,
					flairStyleTemplate: g,
					formatTitle: C,
					hostPostData: y,
					isCheckboxSelected: G,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ie,
					isOverlay: ae,
					isProfileCreatorStatsEnabled: de,
					imageGalleryCurrentItem: ce,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					onSizeChanged: be,
					poll: xe,
					post: fe,
					postId: Ee,
					redditStyle: ve,
					scrollerItemRef: ge,
					showBulkActionCheckbox: Ce,
					showEditFlair: ye,
					showMedia: _e,
					subredditOrProfile: Oe,
					toggleCheckbox: ke,
					userIsOp: we,
					shouldShowGalleryTileOption: je,
					showPromotedCTA: Ne
				} = e, Se = Object(l.a)(), Ie = we && de, Pe = Object(c.a)(x);
				Object(n.useEffect)(() => {
					be && Pe !== x && be(fe.id)
				}, [x, be, fe.id, Pe]);
				const Te = ve ? void 0 : g,
					Me = s || void 0,
					Le = Object(Y.a)(le),
					Re = Object(K.a)(le),
					Fe = Object(Z.a)(le),
					Ae = me && Y.a,
					De = Object(S.d)(fe),
					Be = Object(P.c)(fe),
					We = !!fe.media && fe.media.type === V.o.RTJSON,
					He = we && We,
					Ue = f && !_e,
					Ve = !!fe.media && Object(V.H)(fe.media),
					ze = !!fe.recommendationContext,
					Ge = {
						flairStyleTemplate: Te,
						post: fe,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ee,
						isOverlay: ae,
						shouldShowSubscribeButton: !(se && ie) || ze && ie,
						subredditOrProfile: Oe
					},
					qe = Object(r.t)(fe, ce),
					{
						source: Ke
					} = qe,
					[Ze, Ye] = Object(n.useState)(!1),
					Qe = Object(n.useCallback)(() => {
						Ye(!Ze), Object(Q.Mb)(), Se(Object($.d)(Ee))
					}, [Ze, Ee, Se]);
				let Je = o.a.createElement(z.a, {
					className: ne.a.classicThumbnail,
					crosspost: Me && fe,
					isMeta: fe.isMeta,
					post: Me || fe,
					redditStyle: ve,
					templatePlaceholderImage: Te && Te.postPlaceholderImage,
					removeLink: Ve
				});
				Object(U.b)(fe) && (Je = o.a.createElement(_, {
					post: fe
				}));
				const Xe = o.a.createElement(L.a, {
					className: Object(i.a)(te.a.classicPostStyles, ne.a.postContainer, Object(X.a)(e), {
						[ne.a.mFirst]: v,
						[ne.a.shouldShowOverflow]: Ie
					}, t),
					isOverlay: ae,
					style: {
						...Object(X.d)(e),
						...Object(X.b)(Te)
					},
					post: fe,
					onClick: pe,
					eventFactory: E
				}, o.a.createElement(A.a, {
					model: fe,
					handleVote: b,
					showBulkActionCheckbox: Ce,
					isCheckboxSelected: G,
					toggleCheckbox: ke,
					flairStyleTemplate: Te,
					redditStyle: ve,
					postId: Ee
				}), o.a.createElement(M.a, {
					className: Ie ? ne.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, o.a.createElement(O.a, {
					className: ne.a.eventMeta,
					post: fe
				}), o.a.createElement("div", {
					className: ne.a.mainBody
				}, o.a.createElement("div", {
					className: Ue ? ne.a.expandoContainer : ne.a.thumbnailContainer
				}, !Ue && Je, o.a.createElement(k.a, {
					crosspost: Me,
					className: ne.a.rightExpando,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(i.a)(ne.a.content, {
						[ne.a.showBulkActionCheckbox]: Ce
					}),
					"data-click-id": "body"
				}, !!fe.recommendationContext && o.a.createElement(T.a, {
					content: fe.recommendationContext.content,
					layout: q.g.Classic,
					post: fe
				}), o.a.createElement(D.c, {
					className: xe ? ne.a.titleWithPoll : void 0,
					format: C,
					poll: xe,
					post: fe,
					redditStyle: ve,
					size: D.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: ae
				}, fe.source && !Me && !fe.isSurveyAd && o.a.createElement(H.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(d.a)(fe))), o.a.createElement(R.a, oe({
					key: "PostMeta"
				}, Ge)), me && Le && De && o.a.createElement(N.a, {
					thing: fe
				}), me && Le && Be && o.a.createElement(I.a, {
					onIgnoreReports: ue,
					reportable: fe
				}), Ne && Ke && Ke.url && !fe.isSurveyAd && o.a.createElement(m.a, {
					className: ne.a.adLinkWrapper
				}, o.a.createElement(p.a, {
					post: fe,
					adLinkContent: qe
				})), o.a.createElement("div", {
					className: ne.a.flatlistContainer
				}, o.a.createElement(k.a, {
					className: ne.a.leftExpando,
					crosspost: Me,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				}), o.a.createElement(u.a, {
					className: ne.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: fe,
					onVoteClick: b
				}), o.a.createElement(w.a, {
					className: ne.a.flatlistSeparator
				}), !fe.isSurveyAd && o.a.createElement(w.c, {
					className: ne.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Re,
					hasModPostPerms: Le,
					hasModFullPerms: Fe,
					hostPostData: y,
					isOverlay: !!ae,
					modModeEnabled: me,
					onClickInsightsButton: Qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					post: fe,
					shouldShowInsightsButton: Ie,
					showEditPost: He,
					showEditFlair: ye,
					tooltipType: ae ? B.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae
					})
				})), o.a.createElement(j.d, null))), Object(J.a)(fe, ne.a, ge, x, je, re), Oe && Ze && o.a.createElement(h.a, {
					className: ne.a.creatorStatsContainer,
					post: fe,
					subreddit: Oe,
					isProfileStats: !0
				})));
				return o.a.createElement(W.b, null, Xe)
			});
			t.default = Object(G.a)(re)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
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
						className: s,
						comment: n,
						onClick: r,
						style: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				f = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				E = s.n(f);
			const v = h.a.wrapped(x.a, "Show", E.a);
			var g = e => o.a.createElement(b.g, null, !e.comment.isApproved && o.a.createElement(b.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.i, null)), o.a.createElement(b.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(b.j, null)), o.a.createElement(b.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(b.h, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const C = h.a.wrapped(l.a, "StyledDropdown", E.a),
				y = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				_ = Object(r.b)(y, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.a)(s.id)),
						onLockComment: () => e(Object(a.c)(s.id)),
						onRemoveComment: () => e(Object(a.e)(s.id, !1)),
						onSpamComment: () => e(Object(a.e)(s.id, !0)),
						onShowComment: () => e(Object(a.d)(s.id))
					}
				}),
				O = Object(d.a)(C),
				k = _(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(O, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(g, {
						onApproveComment: () => {
							n(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.c)("spam", t.id))
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
			t.a = k
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.L;
			class E extends o.a.Component {
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
						expandToggled: s
					} = this.state;
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), o.a.createElement("a", {
						className: h.a.seeMore,
						onClick: this.onShowMore
					}, b._("see more", null, {
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
			var v = E,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				y = s.n(C),
				_ = s("./src/lib/makeCommentsPageKey/index.ts"),
				O = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/reddit/actions/comment/authoring.ts"),
				j = s("./src/reddit/actions/comment/moderation.ts"),
				N = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/modal.ts"),
				I = s("./src/reddit/actions/reportFlow/index.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				F = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				A = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				H = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				z = s("./src/reddit/helpers/overlay/index.ts"),
				G = s("./src/reddit/helpers/trackers/lightbox.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				K = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/selectors/activeModalId.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				xe = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = xe.a.wrapped(se.b, "OverflowMenu", he.a),
				ge = xe.a.wrapped(M.a, "ModToolsFlatlist", he.a),
				Ce = xe.a.wrapped(A.a, "ModActionsMenu", he.a),
				ye = xe.a.wrapped(ae.b, "DropdownRow", he.a),
				_e = xe.a.wrapped(ce.a, "Flatlist", he.a),
				Oe = xe.a.button("Button", he.a),
				ke = Object(H.u)(),
				we = e => `Comment-${e}--Modal--DeleteComment`,
				je = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Se = e => `View--Reports--${e}`,
				Ie = Object(i.c)({
					activeTooltipId: X.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.a)(e) === we(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.C)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.R,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.l,
					modModeEnabled: H.T,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					subreddit: H.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.d
				});
			class Pe extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.e)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(G.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.e)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: r
					} = this.props, i = Object(V.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return n ? o.a.createElement(ge, {
						comment: e,
						isCommentAuthor: a
					}) : o.a.createElement(Ce, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(me.a, null), o.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(D.a)(e);
					if (s && Object(D.c)(e) && !t) return o.a.createElement(L.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Se(e.id),
						id: Se(e.id)
					}, o.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Se(e.id)
					}), e.ignoreReports ? o.a.createElement(le.a, null) : o.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(V.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !n)) return o.a.createElement(L.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === je(e.id)
					}, o.a.createElement(Ee.a, null), o.a.createElement(F.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === je(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: je(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: r,
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, h = Object(V.a)(c), b = !!r && r.displayText === e.author, x = (!l && !e.isLocked || h && a) && !(Object(K.g)(e) && u), f = r && e.isGildable && !(Object(K.g)(e) && u);
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(_e, null, x && o.a.createElement(Oe, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && o.a.createElement(Oe, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(re.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(Oe, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(ve, {
						dropdownId: Ne(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && o.a.createElement(ye, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe.a, {
						name: be.a.report
					})), o.a.createElement(ye, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(fe.a, {
						name: be.a.saved
					}) : o.a.createElement(fe.a, {
						name: be.a.save
					})), b && o.a.createElement(ye, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe.a, {
						name: be.a.edit
					})), b && o.a.createElement(ye, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(R.a, {
						actionText: g.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: g.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: g.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: g.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: y.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Te = ke(Object(r.b)(Ie, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(w.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(j.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(j.g)(s.id)),
						onGildClick: t => e(Object(N.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(I.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(P.h)({
							tooltipId: je(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(P.h)({
							tooltipId: Se(s.id)
						})),
						onToggleSave: () => e(Object(k.m)(s.id)),
						handleDelete: () => {
							e(Object(S.i)(we(s.id))), e(Object(P.h)({
								tooltipId: Ne(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(_.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(O.a)(q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(z.a)(t)), e(Object(w.f)(o))
						},
						handleReply: t => {
							const n = Object(_.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(z.a)(t)), e(Object(w.g)(o))
						},
						toggleDeleteCommentModal: () => e(Object(S.i)(we(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(Pe)))),
				Me = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Fe = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				De = s.n(Ae);
			const Be = xe.a.wrapped(Me.a, "TopMeta", De.a),
				We = xe.a.div("ProfileCommentWrapper", De.a),
				He = xe.a.div("CommentBody", De.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Fe.b)(e, t),
					flair: Y.e
				})),
				Ve = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => o.a.createElement(Le.a, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ve(e)
				});
				return o.a.createElement(We, {
					className: Object(a.a)({
						[De.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(He, null, r ? l() : o.a.createElement(v, {
					height: d.Vb,
					isExpanded: r
				}, l)), !t.isDeleted && i && o.a.createElement(Te, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
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
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(c.a, "RadioOff", u.a),
				f = a.a.wrapped(l.a, "RadioOn", u.a),
				E = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(x, null), e.text),
				v = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: s
					}, o.a.createElement(E, {
						onClick: () => p(r.H.NONE, null),
						selected: !c && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(E, {
						onClick: () => p(r.H.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(E, {
						onClick: () => p(r.H.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(E, {
						onClick: () => p(r.H.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(E, {
						onClick: () => p(r.H.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var g = Object(d.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(g, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.H.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.H.ADMIN ? m("admin_distinguish") : a && e !== r.H.MODERATOR ? m("undistinguish") : s && e !== r.H.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
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
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
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
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostList/Placeholder.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var p = e => {
				let {
					children: t,
					className: s
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.Wrapper, s)
				}, r.a.createElement(d.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: c.g.Classic
				}), r.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var u = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.jc.ALL
				} = e;
				return r.a.createElement(p, {
					className: t
				}, o === i.jc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var h = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.jc.ALL
				} = e;
				return r.a.createElement(p, {
					className: t
				}, o === i.jc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var b = e => {
					let {
						className: t,
						text: s
					} = e;
					return r.a.createElement(p, {
						className: t
					}, s)
				},
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				E = s.n(f);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => r.a.createElement("div", {
				className: E.a.container
			}, r.a.createElement(x.a, {
				className: E.a.hideIcon
			}), r.a.createElement("h3", {
				className: E.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: E.a.subtitle
			}, v._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					p = Object(l.a)(n),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: n
				}), !p && b && o.a.createElement(c.a, {
					className: u.a.eventFollowButton,
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
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			var m = e => o.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				u = s("./src/reddit/components/HumanDate/index.tsx"),
				h = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const f = x.a.span("PostEventFutureText", b.a),
				E = x.a.span("PostEventPastText", b.a),
				v = x.a.span("PostEventNowText", b.a),
				g = x.a.span("Container", b.a),
				C = x.a.wrapped(m, "CalendarIcon", b.a),
				y = x.a.wrapped(p, "LiveIcon", b.a),
				_ = x.a.div("LoadingState", b.a);
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
						eventIsLive: a,
						eventStart: d
					} = s, c = Object(r.e)(d, n);
					let l, m;
					if (this.state.mounted || c === r.a.Live) l = o.a.createElement(u.c, {
						startTime: d,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(_, {
							className: e
						})
					}
					if (a) m = o.a.createElement(v, null, o.a.createElement(y, null), l);
					else if (c === r.a.Future) m = o.a.createElement(f, null, o.a.createElement(C, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = o.a.createElement(E, null, o.a.createElement(C, null), l)
					}
					return o.a.createElement(g, {
						className: e
					}, m)
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/reddit/components/ExpandoButton/index.m.less"),
				v = s.n(E);
			const g = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(v.a.icon, v.a.hideOnHover);
					if (t) return r.a.createElement(h.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(h.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(h.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(h.a, {
								name: "gif_post",
								className: n
							});
						case b.o.IMAGE:
							return r.a.createElement(h.a, {
								name: "image_post",
								className: n
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(h.a, {
								name: "text_post",
								className: n
							});
						case b.o.VIDEO:
							return r.a.createElement(h.a, {
								name: "video_post",
								className: n
							});
						case b.o.GALLERY:
							return r.a.createElement(h.a, {
								name: "media_gallery",
								className: n
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(h.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = g(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: E,
					useMediaIcons: g
				} = e, y = s || b, _ = Object(i.e)(x.b), O = Object(i.e)(x.c), k = t => {
					(_ || O) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, w = o && !!s;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type || "liveaudio" === y.media.type) && !Object(u.a)(y)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: E
				}, p ? r.a.createElement(h.a, {
					name: "collapse",
					className: v.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, C(y.media && y.media.type, w, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(v.a.icon, v.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: v.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(v.a.icon, v.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(y.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: v.a.icon
				}))
			})
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.u)(),
				x = Object(i.c)({
					layout: m.R
				}),
				f = Object(r.b)(x);
			class E extends o.a.Component {
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
						s = d.g - t,
						n = l.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${u.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.q+d.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.r}px) / 2);\n              }\n\n              .${u.a.Component}.${u.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.q+d.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, u.a.Component, {
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
			t.a = b(f(h.a.wrapped(E, "Component", u.a)))
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const p = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : o.a.createElement(a.a, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: p(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				v = s.n(E),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				_ = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				O = s.n(_);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.wrapped(x.a, "InternalLink", O.a), j = c.a.div("Wrapper", O.a), N = c.a.div("Row", O.a), S = c.a.wrapped(g.a, "CommentIcon", O.a), I = c.a.div("TitleContainer", O.a), P = c.a.div("PostTitleContainer", O.a), T = c.a.wrapped(p.c, "PostTitle", O.a), M = c.a.wrapped(u.d, "PostTopMeta", O.a), L = c.a.wrapped(u.a, "MetaSeparator", O.a), R = Object(r.b)(() => Object(i.c)({
				comment: C.b,
				isBlockingInterstitialEnabled: y.b,
				isBlockingInterstitialV2Enabled: y.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), F = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(L, null), o.a.createElement(M, {
					metaSeparatorClassName: O.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, A = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return o.a.createElement(w, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(n || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.a, {
					className: Object(a.a)(v.a.compactPostStyles, O.a.overviewCommentPost, {
						[O.a.banned]: !!e.post.bannedBy,
						[O.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(j, {
					style: {
						background: Object(f.e)(e)
					}
				}, o.a.createElement(N, null, o.a.createElement(S, null), o.a.createElement(I, null, k._("{postAuthor} commented on {postTitle} {postMeta}", [k._param("postAuthor", A({
					...e
				})), k._param("postTitle", o.a.createElement(P, null, o.a.createElement(T, {
					outboundLinkClassName: O.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: O.a.postTitleTitle
				}))), k._param("postMeta", F(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
				}, u), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.m.less"),
				C = s.n(g);
			const y = Object(u.a)(() => Object(r.c)({
				basePixelMetadata: Object(E.a)((e, t) => {
					let {
						post: s
					} = t;
					return Object(b.b)(e, s.id)
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
					return Object(b.i)(e, {
						postId: s.id
					})
				},
				pageType: e => Object(x.d)(e).pageType
			}));
			class _ extends o.a.Component {
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
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: u,
						sendEvent: b,
						style: x,
						ref: E,
						shouldAddGalleryViewability: v = !0
					} = this.props, g = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, l, t, r, u))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(C.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), y = !!l.media && l.media.type === h.o.VIDEO;
					return l.isSponsored || y ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(h.E)(l.media) && v ? o.a.createElement(m, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = y(Object(v.a)(Object(p.c)(_)))
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
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends r.a.Component {
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
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(h))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "g", (function() {
				return j
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				h = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(b);
			const f = r.a.wrapped(d.a, "Icon", x.a),
				E = r.a.wrapped(c.a, "Icon", x.a),
				v = r.a.wrapped(l.a, "Icon", x.a),
				g = r.a.wrapped(m.a, "Icon", x.a),
				C = r.a.wrapped(p.a, "Icon", x.a),
				y = r.a.wrapped(u.a, "Icon", x.a),
				_ = () => o.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				O = () => o.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				k = () => o.a.createElement(h.a, {
					className: x.a.svgIcon
				}),
				w = r.a.wrapped(i.b, "DropdownRow", x.a),
				j = r.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: f,
					isVoteCountAnimation: E,
					postId: v,
					shouldShowUpvoteRatioOnHover: g
				} = e, C = `upvote-button-${t.id}${f?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), o.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: C,
					isVoteCountAnimation: E,
					isCountAnimShadowTestEnabled: u,
					postId: v,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/lodash/throttle.js"),
				d = s.n(a),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = s("./node_modules/reselect/es/index.js"),
				h = s("./src/config.ts"),
				b = s("./src/higherOrderComponents/asTooltip.tsx"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				E = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Profile/index.ts"),
				w = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				P = s.n(I);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(C.u)({
					routeName: C.Y,
					privateListingType: C.j
				}),
				L = Object(u.c)({
					isDropdownMenuOpen: e => Object(j.a)(e) === F,
					isOwnProfile: (e, t) => Object(N.X)(e, t.profileName),
					isSnoovatar30Enabled: w.d.snoovatar30,
					isSubscriptionsPinned: S.b
				}),
				R = Object(b.a)(y.a),
				F = "profile-nav-menu-tooltip",
				A = g.g + g.r + g.q;
			var D;
			t.a = M(Object(m.b)(L, e => ({
					toggleTooltip: t => e(Object(E.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: s,
						privateListingType: n,
						profileName: r,
						routeName: a,
						toggleTooltip: m,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: u,
						viewBlockedConsent: h
					} = e;
					const [b, f] = Object(c.useState)(!1), E = Object(c.useRef)(null), [C, y] = Object(c.useState)([]), [_, k] = Object(c.useState)([]);
					return Object(c.useEffect)(() => {
						const e = H({
							profileName: r,
							isOwnProfile: s,
							routeName: a,
							privateListingType: n,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						y(e.filter(e => e.position === D.MENU));
						const t = [],
							c = d()(() => {
								const s = document.documentElement.clientWidth - 2 * g.q,
									n = s > A ? A : s;
								let o = 42;
								t.forEach(t => {
									o += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = o > n ? D.DROPDOWN : D.MENU
								});
								const r = e.filter(e => e.position === D.MENU);
								y(e => i()(r, e) ? e : r);
								const a = e.filter(e => e.position === D.DROPDOWN);
								k(e => i()(a, e) ? e : a), f(a.length > 0)
							}, 50);
						return o.a.read(() => {
							const e = E.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), c())
						}), window.addEventListener("resize", c), () => {
							window.removeEventListener("resize", c)
						}
					}, [r, s, a, n, p, h]), l.a.createElement("div", {
						className: P.a.container
					}, l.a.createElement(v.a, {
						bladeOpen: !1,
						offsetLeft: u ? g.u : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: P.a.menuContainer,
							ref: E
						}, C.map(e => l.a.createElement(B, T({}, e, {
							key: e.key
						})))), b && l.a.createElement("button", {
							className: Object(x.a)(P.a.mainLink),
							id: F,
							onClick: () => m(F)
						}, l.a.createElement(O.a, {
							name: "overflow_horizontal"
						})), b && l.a.createElement(R, {
							className: P.a.dropdown,
							isOpen: t,
							tooltipId: F
						}, _.map(e => l.a.createElement(W, T({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(D || (D = {}));
			const B = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: o
					} = e;
					return o ? l.a.createElement(_.a, {
						className: Object(x.a)(P.a.mainLink, {
							[P.a.isActive]: t
						}),
						to: n
					}, s) : l.a.createElement("a", {
						className: Object(x.a)(P.a.mainLink, {
							[P.a.isActive]: t
						}),
						href: n
					}, s)
				},
				W = e => {
					let {
						isActive: t,
						internal: s,
						url: n,
						text: o
					} = e;
					return s ? l.a.createElement(p.a, {
						className: Object(x.a)(P.a.dropdownLink, {
							[P.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, o) : l.a.createElement("a", {
						className: Object(x.a)(P.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, o)
				},
				H = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isSnoovatar30Enabled: i,
						viewBlockedConsent: a
					} = e;
					const d = s ? [{
						internal: !0,
						isActive: o === f.Ob.PROFILE_PRIVATE && r === k.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === f.Ob.PROFILE_PRIVATE && r === k.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === f.Ob.PROFILE_PRIVATE && r === k.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === f.Ob.PROFILE_PRIVATE && r === k.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: D.MENU
					}] : [];
					s ? (d.push({
						internal: !0,
						isActive: o === f.Ob.PROFILE_PRIVATE && r === k.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: D.MENU
					}), d.push({
						internal: !0,
						isActive: o === f.Ob.PROFILE_PRIVATE && r === k.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: D.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${h.a.oldRedditUrl}/user/${t}/gilded/`,
						position: D.MENU
					});
					const c = i ? [{
							internal: !0,
							isActive: o === f.Ob.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: D.MENU
						}] : [],
						l = a ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: o === f.Ob.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${l}`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === f.Ob.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${t}/posts/${l}`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === f.Ob.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${l}`,
						position: D.MENU
					}, ...c, ...d]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				u = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts");
			const f = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				E = e => {
					const t = Object(i.e)(e => Object(x.k)(e));
					return r.a.createElement(a.a, {
						className: e.className
					}, r.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(h.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: b.a.PROFILE
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
			E.defaultProps = {
				isOverlay: !1
			}, t.a = E
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: o,
					items: d,
					minimizedLength: h,
					onLoadMore: b,
					pending: x,
					renderItem: f,
					title: E
				} = e, [v, g] = Object(i.useState)(!1), C = d.length > h || s, y = (!C || v ? d : r()(d, h)).map(e => f({
					item: e
				})), _ = () => {
					v || g(!0), v && !s && g(!1), s && b && b()
				};
				return a.a.createElement(c.a, {
					className: t,
					headerButton: o,
					title: E
				}, y, a.a.createElement(p.a, null, a.a.createElement(u.a, null, C && (() => {
					const e = !v || s && b ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: _
					}, x ? a.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Ub
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				b = s("./src/reddit/selectors/experiments/countrySites.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = s("./src/reddit/selectors/meta.ts"),
				E = s("./src/reddit/components/SidebarFooter/index.m.less"),
				v = s.n(E);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = d.a.a("Link", v.a), y = Object(i.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: x.a,
				countryCode: f.b
			}), _ = Object(r.b)(y), O = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			});
			t.a = O(_(Object(c.c)(e => {
				const t = Object(r.f)().getState(),
					s = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? o.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: v.a.LinkContainer
				}, o.a.createElement("div", {
					className: v.a.Column
				}, o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, g._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, g._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: v.a.Column
				}, o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, g._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, g._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), o.a.createElement("div", {
					className: v.a.Copyright
				}, g._("© {year} Reddit, Inc. All rights reserved.", [g._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return s.includes(t) || "en" === t ? o.a.createElement(C, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				return o.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: v.a.LinkContainer
				}, o.a.createElement("div", {
					className: v.a.Column
				}, o.a.createElement(C, {
					href: "https://www.reddithelp.com"
				}, g._("help", null, {
					hk: "4lyYaD"
				})), o.a.createElement(C, {
					href: "https://www.reddit.com/coins"
				}, g._("Reddit coins", null, {
					hk: "32iMaN"
				})), o.a.createElement(C, {
					href: "https://www.reddit.com/premium"
				}, g._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(C, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, g._("Communities", null, {
					hk: "3CJu37"
				})), o.a.createElement(C, {
					href: `https://www.reddit.com${Object(u.a)()}`
				}, g._("Rereddit", null, {
					hk: "1z3k7C"
				})), o.a.createElement(C, {
					href: "https://www.reddit.com/topics/a-1/"
				}, g._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && o.a.createElement(o.a.Fragment, null, o.a.createElement(C, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, g._("Impressum", null, {
					hk: "4cKXSI"
				})), o.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, g._("Transparency report", null, {
					hk: "3CgBdG"
				})), o.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, g._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), o.a.createElement("div", {
					className: v.a.Column
				}, o.a.createElement(C, {
					href: "https://www.redditinc.com/"
				}, g._("about", null, {
					hk: "1sqJKs"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/careers"
				}, g._("careers", null, {
					hk: "26ABvc"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/press"
				}, g._("press", null, {
					hk: "2Qmgdz"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/advertising"
				}, g._("advertise", null, {
					hk: "Mt40U"
				})), o.a.createElement(C, {
					href: "http://www.redditblog.com/"
				}, g._("blog", null, {
					hk: "46IQJw"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, g._("Terms", null, {
					hk: "4qRzfE"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, g._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(C, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, g._("Privacy policy", null, {
					hk: "10K04G"
				})), o.a.createElement(C, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, g._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && o.a.createElement("div", {
					className: v.a.CountryLinkContainer
				}, o.a.createElement("div", {
					className: v.a.Column
				}, n("en"), n("fr"), n("it")), o.a.createElement("div", {
					className: v.a.Column
				}, n("de"), n("es"))), o.a.createElement("div", {
					className: v.a.Copyright
				}, g._("Reddit Inc © {year}. All rights reserved", [g._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(b);
			const f = Object(a.c)({
					currentUser: h.l,
					moderated: p.n,
					subscriptions: u.e,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				E = Object(i.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = E(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const p = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
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
					}(s, new Set(i));
				return r.a.createElement(c.a, {
					className: x.a.container,
					title: p,
					items: u,
					renderItem: v,
					hasMoreItems: a,
					onLoadMore: d,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(u);
			const b = Object(d.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				x = Object(i.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.g)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: h.a.description
					}, r.a.createElement(a.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: h.a.meta
					}, n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: i,
					profileName: a
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: i,
					pending: s,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				u = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = s.n(h);
			const x = Object(u.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const n = Object(p.Bb)(e, {
							userName: s
						}),
						o = Object(m.f)(e);
					return (n && o ? o[n.id] : null) || []
				}
			});

			function f(e) {
				let {
					item: t
				} = e;
				const s = t.subredditInfo,
					o = r.a.createElement(c.b, {
						iconUrl: s.styles.icon,
						className: b.a.subredditIcon
					});
				return r.a.createElement(l.a, {
					className: b.a.communityItemContainer,
					key: s.id
				}, r.a.createElement("div", {
					className: b.a.iconContainer
				}, r.a.createElement(a.a, {
					to: s.path
				}, o)), r.a.createElement("div", {
					className: b.a.communityDescription
				}, r.a.createElement("div", {
					className: b.a.communityName
				}, r.a.createElement(a.a, {
					to: s.path
				}, s.prefixedName)), r.a.createElement("div", {
					className: b.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(i.b)(x)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? r.a.createElement(d.a, {
					title: n.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: s,
						style: o
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(t, p.a.container),
						style: o
					}, a.a.createElement(l.l, {
						className: p.a.button,
						onClick: () => h(s)
					}, u._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				x = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = s.n(v),
				C = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = d.e[1] + 24,
				O = f.f + 8,
				k = O + 152 + 16,
				w = k + _ + 8,
				j = C.a.div("Container", g.a),
				N = C.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(b, y({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?O:8}px)`
						}
					}, n))
				}, "BackToTop", g.a),
				S = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: o,
						isSticky: r
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[g.a.StickyStyles]: r && !o,
							[g.a.StickyStylesFakeOverlay]: !!o
						})
					}, t)
				};
			class I extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > w,
						shouldFooterSticky: this.windowHeight > k
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: o,
							hideFooter: r,
							pageLayer: i
						}
					} = this, d = this.state.isAdSticky && !(!t && !n);
					return a.a.createElement(j, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(S, {
						isFakeOverlay: s,
						isSticky: d
					}, t, n, !r && a.a.createElement(x.a, null)), !this.props.hideBackToTop && a.a.createElement(N, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const P = Object(E.u)();
			t.a = P(I)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = s("./node_modules/lodash/isEqual.js"),
				h = s.n(u);
			const b = Object(a.b)(a.d, h.a);
			var x = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				E = s.n(f),
				v = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts");
			const C = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(x.r)(e, Object(x.m)(e, s))
				}
			}, b);
			t.a = Object(i.b)(C)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(d.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: j
				})
			});
			const y = v.a.wrapped(p.a, "TrophyItem", E.a),
				_ = v.a.div("TrophyIcon", E.a),
				O = v.a.h5("TrophyName", E.a),
				k = v.a.div("TrophyContent", E.a),
				w = v.a.wrapped(c.c, "Description", E.a),
				j = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(y, {
						key: t.id
					}, r.a.createElement(_, null, t.url ? r.a.createElement("a", {
						target: g.d.BLANK,
						rel: g.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.n(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.Q(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), r.a.createElement(k, null, r.a.createElement(O, null, t.name), r.a.createElement(w, null, t.description)))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			})), s.d(t, "a", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts");
			var u = Object(i.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(p.f()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = s.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => r.a.createElement(h.a, {
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
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(N, k({
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
				j = Object(d.c)({
					hideNSFWPref: C.G,
					nightmode: C.eb
				}),
				N = Object(i.b)(j)(e => r.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(v.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: b.t
				}, r.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(E.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: O.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: O.a.nsfwFlair,
					flair: {
						type: g.f.Nsfw,
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
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(o.d)(e) : Object(o.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/models/ExternalAccount/index.ts"),
				u = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				g = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(g);
			var y = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== p.a.Twitter ? null : (r = o.a.createElement(E.a, {
						className: C.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, o.a.createElement(v.a, null, o.a.createElement("span", {
						className: C.a.icon
					}, r), o.a.createElement(x.b, {
						className: C.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: C.a.linkTitle
					}, o.a.createElement("span", {
						className: C.a.name
					}, i), o.a.createElement(f.a, {
						className: C.a.linkIcon
					})), o.a.createElement("div", {
						className: C.a.linkDescription
					}, a))))
				},
				_ = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = s.n(_);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(i.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(u.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(h.Bb)(e, {
						userName: s.name
					}) : null
				}
			}), j = Object(r.b)(w, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(a.a, null, o.a.createElement(c.b, null, o.a.createElement(c.a, null, k._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: O.a.account
				}, o.a.createElement(y, {
					provider: p.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const g = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = g(e);
					return Object(E.f)(t)
				},
				_ = e => {
					const t = C(e);
					return Object(E.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(O);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(m.u)(), N = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(x.l)(e, {
							subredditId: s
						}),
						o = Object(f.eb)(e);
					return n || o
				},
				nigtmode: f.eb,
				subredditId: m.n,
				topPostVariant: b.d
			}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(u.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = g(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: u,
						truncateThreshold: h
					} = this.props, b = s ? k.a.widgetContentOnly : k.a.widgetContent, x = !n && this.props.styles, f = x ? this.getWidgetBackgroundStyles() : {}, E = x ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!d,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: f
					}, m && o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!l
						}),
						id: i,
						style: E,
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, u)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(b, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(N(Object(d.a)(Object(l.c)(S))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: f.R,
					showPromotedCTA: x.a,
					moderatorPermissions: u.m,
					modModeEnabled: c.T,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.s,
					flairStyleTemplate: c.V
				},
				v = Object(n.b)(() => Object(o.c)(E), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === a.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(v(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
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
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
				return s
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, n, r, i) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, n) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				h = e => Object(n.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				a = (e, t) => s => ({
					...Object(r.n)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.gb)(s),
					post: Object(r.H)(s, e),
					userSubreddit: Object(r.qb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.n)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.H)(s, t),
					subreddit: Object(r.gb)(s),
					userSubreddit: Object(r.qb)(s)
				}),
				c = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.n)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.H)(t, e, void 0, 0),
					profile: Object(r.Q)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.n)(n),
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					source: "global",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.H)(n, e, void 0, s)
				}),
				p = (e, t, s, n, i, a) => d => ({
					...Object(r.n)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.H)(d, e, void 0, a),
					subreddit: Object(r.gb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				u = (e, t, s) => n => ({
					...Object(r.n)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.H)(n, e, void 0, s),
					subreddit: Object(r.gb)(n)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.ub)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				d = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.H(s, e),
					subreddit: i.gb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.n(s)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...i.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
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
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.Ce,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === o.Ke.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(n.a)(i.G, a, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.8cc453dbae397e3d1425.js.map