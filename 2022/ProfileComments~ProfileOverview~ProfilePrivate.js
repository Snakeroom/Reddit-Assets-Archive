// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.2d96879f938f6e66f50a.js
// Retrieved at 10/18/2022, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				const h = Object(d.t)(s, m.displayText),
					f = Object(d.u)(s) ? x : b,
					v = Object(d.u)(s) ? s.subcaption : m.displayText,
					E = Object(i.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					g = Object(i.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: E
				}, b && !o && !h && r.a.createElement("span", {
					className: u.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && r.a.createElement(c.a, {
					href: m.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: g,
					"data-adclicklocation": l.a.CTA_URL
				}, x), h && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: u.a.productTitle
				}, f), r.a.createElement("span", {
					className: u.a.subcaption
				}, v))), p && r.a.createElement(a.a, {
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
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				x = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/models/Audio/index.ts"),
				f = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				E = s.n(v),
				g = s("./src/config.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				C = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = () => Math.floor(10 * Math.random()) + 1;
			var k = e => {
					let {
						postId: t
					} = e;
					const s = Object(x.e)(O.db),
						[r, a] = Object(n.useState)(!1),
						[c, d] = Object(n.useState)(y());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							a(!0), e = setTimeout(() => a(!1), 3500), d(y())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), o.a.createElement("div", {
						className: E.a.classicSpeaker
					}, r && o.a.createElement(C.a, {
						ringId: `${t}`,
						className: Object(i.a)(E.a.speakerRings, {
							[E.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: E.a.snoovatar,
						src: `${g.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: j._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && o.a.createElement("div", {
						className: E.a.muteContainer
					}, o.a.createElement(_.a, {
						className: E.a.muteIcon
					})))
				},
				I = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var S = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: r
					} = t;
					return Object(x.e)(f.t) && s.roomStatus === h.b.NotStarted ? o.a.createElement(I.a, {
						postId: n,
						author: r,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: E.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement(k, {
						postId: n
					})) : o.a.createElement("div", {
						className: E.a.endedClassicContainer
					}, o.a.createElement(_.a, {
						className: E.a.muteIcon
					}))
				},
				P = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				w = s("./src/reddit/components/ExpandoButton/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				D = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostMeta/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				G = s("./src/reddit/components/PostTitle/index.tsx"),
				q = s("./src/reddit/components/PostTopMeta/index.tsx"),
				z = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				J = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				K = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				X = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ee = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				te = s("./src/reddit/helpers/localStorage/index.ts"),
				se = s("./src/reddit/helpers/search/renderMedia.tsx"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				re = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ie = s.n(re),
				ae = s("./src/redditGQL/types.ts"),
				ce = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				de = s("./src/reddit/components/ClassicPost/index.m.less"),
				le = s.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: x,
					isExpanded: f,
					inSubredditOrProfile: v,
					eventFactory: E,
					first: g,
					flairStyleTemplate: O,
					formatTitle: _,
					hostPostData: C,
					isCheckboxSelected: j,
					isCurrentUserProfilePost: y,
					isFrontpage: k,
					isGalleryTileLayoutDefault: I,
					isLoggedIn: N,
					isOverlay: X,
					imageGalleryCurrentItem: re,
					moderatorPermissions: de,
					modModeEnabled: ue,
					onClickPost: pe,
					onIgnoreReports: be,
					onOpenReportsDropdown: xe,
					onSizeChanged: he,
					poll: fe,
					post: ve,
					postId: Ee,
					redditStyle: ge,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: _e,
					showEditFlair: Ce,
					showMedia: je,
					shouldShowInsightsButton: ye,
					subredditOrProfile: ke,
					toggleCheckbox: Ie,
					userIsOp: Ne,
					shouldShowGalleryTileOption: Se,
					showPromotedCTA: Pe,
					showCTAExperimentDesign: we
				} = e, Le = Object(l.a)(), Te = Object(d.a)(f);
				Object(n.useEffect)(() => {
					he && Te !== f && he(ve.id)
				}, [f, he, ve.id, Te]);
				const Me = ge ? void 0 : O,
					Re = s || void 0,
					Ae = Object(ee.a)(de),
					Fe = Object(Y.a)(de),
					Be = Object($.a)(de),
					De = ue && ee.a,
					We = Object(R.a)(ve),
					Ue = Object(F.c)(ve),
					He = !!ve.media && ve.media.type === K.o.RTJSON,
					Ve = Ne && He,
					Ge = v && !je,
					qe = !!ve.media && Object(K.H)(ve.media),
					ze = !!ve.recommendationContext,
					Je = {
						flairStyleTemplate: Me,
						post: ve,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: y,
						isOverlay: X,
						shouldShowSubscribeButton: !(k && N) || ze && N,
						subredditOrProfile: ke
					},
					Ke = Object(r.t)(ve, re),
					{
						source: Qe
					} = Ke,
					[Xe, Ze] = Object(n.useState)(!1),
					Ye = Object(n.useCallback)(() => {
						Ze(!Xe), Object(te.Mb)(), Le(Object(oe.d)(Ee))
					}, [Xe, Ee, Le]);
				let $e = o.a.createElement(Q.a, {
					className: le.a.classicThumbnail,
					crosspost: Re && ve,
					isMeta: ve.isMeta,
					post: Re || ve,
					redditStyle: ge,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: qe
				});
				Object(h.c)(ve) && ($e = o.a.createElement(S, {
					post: ve
				}));
				const et = o.a.createElement(W.b, {
					className: Object(i.a)(ie.a.classicPostStyles, le.a.postContainer, Object(ne.a)(e), {
						[le.a.mFirst]: g,
						[le.a.shouldShowOverflow]: ye
					}, t),
					isOverlay: X,
					style: {
						...Object(ne.d)(e),
						...Object(ne.b)(Me)
					},
					post: ve,
					onClick: pe,
					eventFactory: E
				}, o.a.createElement(V.a, {
					model: ve,
					handleVote: x,
					showBulkActionCheckbox: _e,
					isCheckboxSelected: j,
					toggleCheckbox: Ie,
					flairStyleTemplate: Me,
					redditStyle: ge,
					postId: Ee
				}), o.a.createElement(D.a, {
					className: ye ? le.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, o.a.createElement(P.a, {
					className: le.a.eventMeta,
					post: ve
				}), o.a.createElement("div", {
					className: le.a.mainBody
				}, o.a.createElement("div", {
					className: Ge ? le.a.expandoContainer : le.a.thumbnailContainer
				}, !Ge && $e, o.a.createElement(w.a, {
					crosspost: Re,
					className: le.a.rightExpando,
					isExpanded: !!f,
					post: ve,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(i.a)(le.a.content, {
						[le.a.showBulkActionCheckbox]: _e
					}),
					"data-click-id": "body"
				}, !!ve.recommendationContext && o.a.createElement(B.a, {
					content: ve.recommendationContext.content,
					layout: Z.g.Classic,
					post: ve
				}), o.a.createElement(G.c, {
					className: fe ? le.a.titleWithPoll : void 0,
					format: _,
					poll: fe,
					post: ve,
					redditStyle: ge,
					size: G.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: X
				}, ve.source && !Re && !ve.isSurveyAd && o.a.createElement(J.a, {
					href: ve.source.url,
					isSponsored: ve.isSponsored,
					postId: ve.id,
					source: ve.source
				}, Object(c.a)(ve))), o.a.createElement(U.a, me({
					key: "PostMeta"
				}, Je)), ue && Ae && We && o.a.createElement(M.a, {
					thing: ve
				}), ue && Ae && Ue && o.a.createElement(A.a, {
					onIgnoreReports: be,
					reportable: ve
				}), Pe && Qe && Qe.url && !ve.isSurveyAd && o.a.createElement(m.a, {
					ctaExperimentDesign: we && "classic",
					className: Object(i.a)(le.a.adLinkWrapper, {
						[le.a.ctaExperiment]: we
					})
				}, o.a.createElement(u.a, {
					post: ve,
					adLinkContent: Ke,
					ctaExperimentDesign: we && "classic"
				})), ve.discussionType === ae.l.Chat && o.a.createElement(ce.a, {
					postId: ve.id
				}), o.a.createElement("div", {
					className: le.a.flatlistContainer
				}, o.a.createElement(w.a, {
					className: le.a.leftExpando,
					crosspost: Re,
					isExpanded: !!f,
					post: ve,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: le.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: ve,
					onVoteClick: x
				}), o.a.createElement(L.a, {
					className: le.a.flatlistSeparator
				}), !ve.isSurveyAd && o.a.createElement(L.c, {
					className: le.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Fe,
					hasModPostPerms: Ae,
					hasModFullPerms: Be,
					hostPostData: C,
					isOverlay: !!X,
					modModeEnabled: ue,
					onClickInsightsButton: Ye,
					onIgnoreReports: be,
					onOpenReportsDropdown: xe,
					post: ve,
					shouldShowInsightsButton: ye,
					showEditPost: Ve,
					showEditFlair: Ce,
					tooltipType: X ? q.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(H.b)({
						editPost: !De,
						hide: !De,
						report: !De,
						mute: !De
					})
				})), o.a.createElement(T.d, null))), Object(se.a)(ve, le.a, Oe, f, Se, I), ke && Xe && o.a.createElement(b.a, {
					className: le.a.creatorStatsContainer,
					post: ve,
					subreddit: ke,
					isOwnProfileStats: !0
				})));
				return o.a.createElement(z.b, null, et)
			});
			t.default = Object(X.a)(ue)
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
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
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
			t.a = l(Object(c.a)(m))
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
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = .75, f = 10 * c.N;
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (h + 1) && u.a.write(() => {
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
					}, x._("see more", null, {
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
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				O = s("./node_modules/lodash/noop.js"),
				_ = s.n(O),
				C = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				N = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/reportFlow/index.ts"),
				w = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/overlay/index.ts"),
				q = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				K = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ce = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(pe),
				xe = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Ee = he.a.wrapped(se.b, "OverflowMenu", be.a),
				ge = he.a.wrapped(T.a, "ModToolsFlatlist", be.a),
				Oe = he.a.wrapped(F.a, "ModActionsMenu", be.a),
				_e = he.a.wrapped(ae.b, "DropdownRow", be.a),
				Ce = he.a.wrapped(de.a, "Flatlist", be.a),
				je = he.a.button("Button", be.a),
				ye = Object(U.u)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Se = e => `View--Reports--${e}`,
				Pe = Object(i.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: U.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.m)(e, {
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
					subreddit: U.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.d
				});
			class we extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ce.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(H.d)(H.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ce.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ce.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ce.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ce.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ce.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ce.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ce.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(oe.a, {
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
					}) : o.a.createElement(Oe, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(me.a, null), o.a.createElement(L.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return o.a.createElement(M.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Se(e.id),
						id: Se(e.id)
					}, o.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Se(e.id)
					}), e.ignoreReports ? o.a.createElement(le.a, null) : o.a.createElement(ue.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(V.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (i && c && !e.bannedBy && (d || a && !n)) return o.a.createElement(M.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(ve.a, null), o.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ie(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
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
						isPendingDeletion: c,
						moderatorPermissions: d,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u,
						isTrueblockPCBlockeeEnabled: p
					} = this.props, b = Object(V.a)(d), x = !!r && r.displayText === e.author, h = (!l && !e.isLocked || b && a) && !(Object(J.g)(e) && p), f = r && e.isGildable && !(Object(J.g)(e) && p);
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(Ce, null, h && o.a.createElement(je, {
						onClick: this.handleReply,
						disabled: c
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && o.a.createElement(je, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(re.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(je, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Ee, {
						dropdownId: Ne(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !x && !c && o.a.createElement(_e, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe.a, {
						name: xe.a.report
					})), o.a.createElement(_e, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(fe.a, {
						name: xe.a.saved
					}) : o.a.createElement(fe.a, {
						name: xe.a.save
					})), x && o.a.createElement(_e, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe.a, {
						name: xe.a.edit
					})), x && o.a.createElement(_e, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe.a, {
						name: xe.a.delete
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
						toggleModal: u,
						trackClick: _.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Le = ye(Object(r.b)(Pe, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(I.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(I.g)(s.id)),
						onGildClick: t => e(Object(N.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(P.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(w.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(w.h)({
							tooltipId: Se(s.id)
						})),
						onToggleSave: () => e(Object(y.o)(s.id)),
						handleDelete: () => {
							e(Object(S.i)(ke(s.id))), e(Object(w.h)({
								tooltipId: Ne(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(C.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(j.a)(z.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(G.a)(t)), e(Object(k.g)(o))
						},
						handleReply: t => {
							const n = Object(C.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(G.a)(t)), e(Object(k.h)(o))
						},
						toggleDeleteCommentModal: () => e(Object(S.i)(ke(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(we)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Me = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				Fe = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Fe);
			const De = he.a.wrapped(Te.a, "TopMeta", Be.a),
				We = he.a.div("ProfileCommentWrapper", Be.a),
				Ue = he.a.div("CommentBody", Be.a),
				He = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: Q.e
				})),
				Ve = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = He(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: i,
					showModTools: d
				} = e, l = s => o.a.createElement(Me.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ve(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return o.a.createElement(We, {
					className: Object(a.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ue, null, r ? l() : o.a.createElement(E, {
					height: c.Zb,
					isExpanded: r
				}, l)), !t.isDeleted && i && o.a.createElement(Le, {
					comment: t,
					commentsPageKey: s,
					showModTools: d
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
				return j
			})), s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(g),
				_ = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				y = 1,
				k = _.a.div("Container", O.a),
				I = _.a.div("PostMetaWrapper", O.a),
				N = _.a.wrapped(p.c, "PostTitle", O.a),
				S = _.a.div("FlatList", O.a),
				P = _.a.div("FlatItem", O.a),
				w = _.a.span("FlatListDotSpacer", O.a),
				L = _.a.wrapped(k, "LinkContainer", O.a),
				T = _.a.div("Content", O.a),
				M = _.a.div("ThumbnailContainer", O.a),
				R = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Sb.TOPIC),
					shouldOpenPostInNewTab: E.jb
				}),
				A = Object(i.b)(R);
			t.c = Object(f.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return i && !i.media ? r.a.createElement(L, {
					className: d
				}, r.a.createElement(T, null, r.a.createElement(I, null, r.a.createElement(u.a, c)), F(i), i.source && r.a.createElement(b.a, {
					post: i
				}), D(e)), U(e)) : r.a.createElement(k, {
					className: d
				}, r.a.createElement(I, null, r.a.createElement(u.a, c)), F(i), B(e), D(e))
			}));
			const F = e => r.a.createElement(N, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, C({}, n, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(S, null, r.a.createElement(P, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(w, null), r.a.createElement(P, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
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
				U = e => r.a.createElement(M, null, r.a.createElement(x.b, {
					post: e.post
				}))
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
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				a = s.n(i),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: i = !1
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.ringsContainer, t, i ? a.a.animated : "")
				}, o.a.createElement(c.a, {
					ringId: n,
					className: Object(r.a)(a.a.innerRing, `${s}Inner`)
				}), o.a.createElement(d.a, {
					ringId: n,
					className: Object(r.a)(a.a.middleRing, `${s}Middle`)
				}), o.a.createElement(l.a, {
					ringId: n,
					className: Object(r.a)(a.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/helpers/trackers/talkCreation.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				p = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				b = s.n(p),
				x = s("./src/config.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = s("./src/reddit/hooks/useGqlContext.ts");
			var g = e => o.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				O = s("./src/reddit/endpoints/talk/index.ts"),
				_ = s("./src/reddit/actions/toaster.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/redditGQL/types.ts");
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => o.a.createElement("span", {
				className: b.a.MicrophoneIcon
			}, o.a.createElement(g, null));
			var I = e => {
				let {
					roomId: t
				} = e;
				const s = Object(r.e)(m.db),
					[a, c] = Object(n.useState)(!1),
					l = Object(r.d)(),
					u = Object(h.b)(),
					p = Object(E.a)();
				return o.a.createElement(f.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: a ? v.a : k,
					iconClassName: a ? b.a.loadingIcon : "",
					className: Object(i.a)(b.a.StartTalkButton, {
						[b.a.isNightMode]: s
					}),
					priority: f.c.Secondary,
					size: f.d.M,
					iconPosition: f.h.L,
					disabled: a,
					text: o.a.createElement("span", {
						className: b.a.StartTalkButtonText
					}, y._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						u(Object(d.a)()), c(!0);
						const e = await Object(O.l)(p(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return l(Object(_.f)({
							kind: C.b.Error,
							text: O.a[j.j.ServiceError]
						})), void c(!1);
						const s = Object(O.h)(e.body);
						if (null == s ? void 0 : s.errorState) return l(Object(_.f)({
							kind: C.b.Error,
							text: O.a[s.errorState.code] || O.a[j.j.ServiceError]
						})), void c(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${x.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: p,
					isClassicView: x = !1
				} = e;
				const h = Object(r.d)(),
					f = Object(l.a)(),
					v = Object(r.e)(m.F),
					E = Object(r.e)(m.db),
					g = Object(r.e)(e => Object(m.Db)(e, {
						postId: s
					})),
					O = Object(r.e)(e => Object(m.Ab)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					s && f && f(Object(d.f)(s))
				}, [f, s]), Object(n.useEffect)(() => {
					O || h(Object(a.d)(t))
				}, [h, t, s, O]);
				const _ = () => o.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(i.a)(b.a.hostAvatar, {
						[b.a.classicView]: x
					})
				}, o.a.createElement("div", {
					className: b.a.snoovatar
				}, o.a.createElement(c.a, {
					userName: t,
					isNSFW: !v,
					className: b.a.isImage
				})), o.a.createElement(u.a, {
					ringId: `${s}`,
					className: Object(i.a)(b.a.hostRings, {
						[b.a.nightMode]: E
					}),
					ringClassName: "hostRing"
				}));
				return x ? o.a.createElement(_, null) : o.a.createElement("div", {
					className: b.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, o.a.createElement("div", {
					className: b.a.upcomingTalkContainer
				}, o.a.createElement(_, null), o.a.createElement("div", {
					className: b.a.upcomingTalkInfo
				}, o.a.createElement("div", {
					className: b.a.upcomingTalkLabel
				}, N._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), o.a.createElement("div", {
					className: b.a.upcomingTalkHost
				}, "u/", t), g && p && o.a.createElement(I, {
					roomId: p
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
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostList/Placeholder.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.Wrapper, s)
				}, r.a.createElement(c.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: d.g.Classic
				}), r.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.oc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === i.oc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.oc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === i.oc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var x = e => {
					let {
						className: t,
						text: s
					} = e;
					return r.a.createElement(u, {
						className: t
					}, s)
				},
				h = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(f);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => r.a.createElement("div", {
				className: v.a.container
			}, r.a.createElement(h.a, {
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				O = s.n(g);
			const _ = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(O.a.icon, O.a.hideOnHover);
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
			t.a = _(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: x,
					toggle: g,
					useMediaIcons: _
				} = e, j = s || x, y = Object(i.e)(f.b), k = Object(i.e)(f.c), I = t => {
					(y || k) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, N = j.media, S = Object(h.q)(x), P = o && !!s;
				return N && !S && !(("rtjson" === N.type || "text" === N.type || "liveaudio" === N.type) && !Object(p.a)(j)) || !!x.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": E.a.MEDIA,
					onClick: g
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: O.a.icon
				}) : _ ? r.a.createElement(r.a.Fragment, null, C(j.media && j.media.type, P, x), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(O.a.icon, O.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: O.a.icon
				})) : j.source && j.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(O.a.icon, O.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(j.permalink),
					rel: "nofollow",
					onClick: I
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: O.a.icon
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
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const x = Object(m.u)(),
				h = Object(i.c)({
					layout: m.S
				}),
				f = Object(r.b)(h);
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
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.l + c.p + c.q,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${c.g+c.p+c.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.g+c.p+c.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: p.a.Container
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
			t.a = x(f(b.a.wrapped(v, "Component", p.a)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(a);
			const d = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => i.a.createElement("span", {
				className: m.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const x = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, i.a.createElement(u, null), i.a.createElement(d, {
					userCount: t
				}))
			};
			var h = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const E = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(h.e)(e => Object(f.a)(e, t));
				return Object(h.e)(v.d) ? i.a.createElement(x, {
					userCount: n,
					className: s
				}) : null
			}
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
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === c.g.Classic,
						[m.a.compactLayout]: s === c.g.Compact,
						[m.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
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
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = s.n(v),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				C = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(C);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = d.a.wrapped(h.default, "InternalLink", j.a), I = d.a.div("Wrapper", j.a), N = d.a.div("Row", j.a), S = d.a.wrapped(g.a, "CommentIcon", j.a), P = d.a.div("TitleContainer", j.a), w = d.a.div("PostTitleContainer", j.a), L = d.a.wrapped(u.c, "PostTitle", j.a), T = d.a.wrapped(p.g, "PostTopMeta", j.a), M = d.a.wrapped(p.a, "MetaSeparator", j.a), R = Object(r.b)(() => Object(i.c)({
				comment: O.b,
				isBlockingInterstitialEnabled: _.b,
				isBlockingInterstitialV2Enabled: _.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.cb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(M, null), o.a.createElement(T, {
					metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					c = `/user/${a}/`;
				return o.a.createElement(k, {
					"data-click-id": "user",
					to: c,
					onClick: e => {
						(n || r) && (e.preventDefault(), i(c))
					}
				}, a)
			};
			t.a = Object(c.a)(Object(x.b)(R(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.b, {
					className: Object(a.a)(E.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(I, {
					style: {
						background: Object(f.e)(e)
					}
				}, o.a.createElement(N, null, o.a.createElement(S, null), o.a.createElement(P, null, y._("{postAuthor} commented on {postTitle} {postMeta}", [y._param("postAuthor", F({
					...e
				})), y._param("postTitle", o.a.createElement(w, null, o.a.createElement(L, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: u.b.Small,
					titleClassName: j.a.postTitleTitle
				}))), y._param("postMeta", A(e))], {
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
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return o.a.createElement("div", u({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				h = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				O = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Report/index.tsx"),
				j = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				k = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/modQueue.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/components/PostBadges/index.m.less"),
				P = s.n(S);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => r.a.createElement("span", w({
					className: P.a.removalReason
				}, e), e.children),
				T = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				F = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				D = Object(b.u)({
					isProfilePostListing: b.L,
					isSubreddit: b.O
				}),
				W = Object(a.c)({
					isModQueueDisplayEnabled: I.b,
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(N.q)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.U
				}),
				U = Object(i.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(U(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: I,
					modModeEnabled: N,
					onHideTooltip: S,
					onOpenRemovalReasonModal: D,
					onShowTooltip: W,
					post: U,
					tooltipType: H,
					isModQueueDisplayEnabled: V
				} = e;
				const G = {
						caretOnTop: !1
					},
					q = U.isRemoved && !U.modRemovalReason && !U.modNote && U.belongsTo.type === p.a.SUBREDDIT,
					z = B("Approve", U.id, H),
					J = B("Archived", U.id, H),
					K = B("Lock", U.id, H),
					Q = B("Mod", U.id, H),
					X = B("Remove", U.id, H),
					Z = B("Report", U.id, H),
					Y = B("Spam", U.id, H),
					$ = B("Sticky", U.id, H),
					ee = B("Pinned", U.id, H);
				return r.a.createElement("div", {
					className: t
				}, a && s && U.distinguishType === d.J.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(v.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.modIcon)
				}), r.a.createElement(m.c, w({
					tooltipId: Q,
					text: R(s)
				}, G))), U.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.archivedIcon),
					desc: T(),
					id: J,
					onMouseEnter: W(J),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: J,
					text: T()
				}, G))), U.isLocked && !U.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.lockIcon),
					desc: M(),
					id: K,
					onMouseEnter: W(K),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: K,
					text: M()
				}, G))), i && Object(k.v)(U) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.stickyIcon),
					desc: A(),
					id: $,
					onMouseEnter: W($),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: $,
					text: A()
				}, G))), I && b && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.stickyIcon),
					desc: F(),
					id: ee,
					onMouseEnter: W(ee),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: ee,
					text: F()
				}, G))), !V && r.a.createElement(r.a.Fragment, null, (U.isApproved || U.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.approveIcon),
					desc: Object(h.a)(U),
					id: z,
					onMouseEnter: W(z),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: z,
					text: Object(h.a)(U)
				}, G))), Object(x.a)(U) && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.removeIcon),
					desc: Object(h.b)(U),
					id: X,
					onMouseEnter: W(X),
					onMouseLeave: S
				}), q && r.a.createElement(u.a, {
					className: P.a.addRemovalReason,
					onClick: D,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (U.modRemovalReason || U.modNote) && r.a.createElement(L, {
					onMouseEnter: W(X),
					onMouseLeave: S
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, w({
					tooltipId: X,
					text: Object(h.b)(U)
				}, G))), U.bannedBy && U.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.spamIcon),
					desc: Object(h.d)(U),
					id: Y,
					onMouseEnter: W(Y),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: Y,
					text: Object(h.d)(U)
				}, G)))), Object(f.a)(U) && !N && !V && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(P.a.icon, P.a.reportIcon),
					desc: Object(h.c)(U.numReports),
					id: Z,
					onMouseEnter: W(Z),
					onMouseLeave: S
				}), r.a.createElement(m.c, w({
					tooltipId: Z,
					text: Object(h.c)(U.numReports)
				}, G))))
			}))
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
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostMeta/index.m.less"),
				_ = s.n(O);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: O,
					isOverlay: C,
					isTopicPage: j,
					post: y,
					shouldShowSubscribeButton: k,
					subredditOrProfile: I,
					tooltipType: N
				} = e, S = !!j, P = Object(E.a)(), w = Object(r.e)(e => !!I && Object(i.i)(e, I.id));
				return o.a.createElement("div", {
					className: _.a.metaContainer
				}, !n && !y.isSponsored && I && o.a.createElement(c.a, {
					postId: y.id,
					subredditName: I.name
				}, o.a.createElement(p.a, {
					className: _.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: I.url,
						state: P
					}
				}, I.displayText)), I && I.isQuarantined && o.a.createElement(u.a, null), !n && !y.isSponsored && I && k && !O && o.a.createElement(b.a, {
					className: _.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: I.name,
						type: Object(g.h)(I) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: y.id,
					size: h.d.XXS,
					small: !0
				}), !n && !y.isSponsored && o.a.createElement(f.b, null), !n && !y.isSponsored && o.a.createElement(d.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), o.a.createElement(m.g, {
					className: _.a.postTopMeta,
					flairStyleTemplate: t,
					post: y,
					tooltipType: N,
					isModWithUserNotesPermissions: w
				}), o.a.createElement(l.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!n,
					post: y,
					tooltipType: N
				}), !S && o.a.createElement(a.a, {
					hideCta: s,
					thing: y,
					tooltipType: C ? m.f.Lightbox : void 0
				}))
			}
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
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: E,
					shouldShowUpvoteRatioOnHover: g
				} = e, O = `upvote-button-${t.id}${f?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = s.n(x);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: a,
					post: x,
					share: v
				} = e;
				const E = Object(l.b)(),
					g = Object(i.d)(),
					O = x && x.id,
					_ = x && x.voteState;
				let C = null;
				O || (C = t ? "user_hovercard" : "profile_overview");
				const j = Object(o.useCallback)(() => E(Object(u.h)(t ? "user_hovercard" : "profile_overview", s)), [t, E, s]);
				return r.a.createElement(m.t, {
					onClick: () => {
						a ? (E(u.i), O && _ === b.a.notVoted && g(Object(c.jb)(O))) : j();
						const e = a ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: C,
							share: v,
							source: e
						}))
					},
					className: Object(n.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[h.a.shirtIcon]: !a,
						[h.a.avatarPostButtonShirtIcon]: a
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: h.a.chevronIcon
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
				c = s.n(a),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				x = s("./src/higherOrderComponents/asTooltip.tsx"),
				h = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				E = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/Profile/index.ts"),
				k = s("./src/reddit/featureFlags/index.ts"),
				I = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				N = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				w = s("./src/server/helpers/profileRedirect.ts"),
				L = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				T = s.n(L);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = Object(O.u)({
					routeName: O.Z,
					privateListingType: O.j
				}),
				A = Object(p.c)({
					isDropdownMenuOpen: e => Object(N.a)(e) === B,
					isOwnProfile: (e, t) => Object(S.W)(e, t.profileName),
					isHistoryTabEnabled: I.a,
					isSnoovatar30Enabled: k.d.snoovatar30,
					isSubscriptionsPinned: P.c
				}),
				F = Object(x.a)(_.a),
				B = "profile-nav-menu-tooltip",
				D = g.g + g.q + g.p;
			var W;
			t.a = R(Object(m.b)(A, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: n,
						privateListingType: r,
						profileName: a,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: x
					} = e;
					const [f, v] = Object(d.useState)(!1), O = Object(d.useRef)(null), [_, C] = Object(d.useState)([]), [y, k] = Object(d.useState)([]);
					return Object(d.useEffect)(() => {
						const e = V({
							isHistoryTabEnabled: s,
							profileName: a,
							isOwnProfile: n,
							routeName: m,
							privateListingType: r,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: x
						});
						C(e.filter(e => e.position === W.MENU));
						const t = [],
							d = c()(() => {
								const s = document.documentElement.clientWidth - 2 * g.p,
									n = s > D ? D : s;
								let o = 42;
								t.forEach(t => {
									o += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = o > n ? W.DROPDOWN : W.MENU
								});
								const r = e.filter(e => e.position === W.MENU);
								C(e => i()(r, e) ? e : r);
								const a = e.filter(e => e.position === W.DROPDOWN);
								k(e => i()(a, e) ? e : a), v(a.length > 0)
							}, 50);
						return o.a.read(() => {
							const e = O.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), d())
						}), window.addEventListener("resize", d), () => {
							window.removeEventListener("resize", d)
						}
					}, [s, a, n, m, r, p, x]), l.a.createElement("div", {
						className: T.a.container
					}, l.a.createElement(E.a, {
						bladeOpen: !1,
						offsetLeft: b ? g.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: T.a.menuContainer,
							ref: O
						}, _.map(e => l.a.createElement(U, M({}, e, {
							key: e.key
						})))), f && l.a.createElement("button", {
							className: Object(h.a)(T.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, l.a.createElement(j.a, {
							name: "overflow_horizontal"
						})), f && l.a.createElement(F, {
							className: T.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, y.map(e => l.a.createElement(H, M({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(W || (W = {}));
			const U = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: o
					} = e;
					return o ? l.a.createElement(C.default, {
						className: Object(h.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						to: n
					}, s) : l.a.createElement("a", {
						className: Object(h.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						href: n
					}, s)
				},
				H = e => {
					let {
						isActive: t,
						internal: s,
						url: n,
						text: o
					} = e;
					return s ? l.a.createElement(u.a, {
						className: Object(h.a)(T.a.dropdownLink, {
							[T.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, o) : l.a.createElement("a", {
						className: Object(h.a)(T.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, o)
				},
				V = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isHistoryTabEnabled: i,
						isSnoovatar30Enabled: a,
						viewBlockedConsent: c
					} = e;
					const d = s ? [{
						internal: !0,
						isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: W.MENU
					}] : [];
					s ? (d.push({
						internal: !0,
						isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: W.MENU
					}), d.push({
						internal: !0,
						isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: W.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: W.MENU
					});
					const l = i && s ? [{
							internal: !0,
							isActive: o === f.Sb.PROFILE_PRIVATE && r === y.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: W.MENU
						}] : [],
						m = a ? [{
							internal: !0,
							isActive: o === f.Sb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: W.MENU
						}] : [],
						u = c ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: o === f.Sb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Sb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(w.a)(t)}/${u}`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: o === f.Sb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: W.MENU
					}, ...m, ...l, ...d]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts");
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
				v = e => {
					const t = Object(i.e)(e => Object(h.k)(e));
					return r.a.createElement(a.a, {
						className: e.className
					}, r.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: x.a.PROFILE
						}
					}), r.a.createElement(c.a, {
						profileName: e.profileName
					}), r.a.createElement(d.a, {
						profileName: e.profileName
					}), !t && r.a.createElement(m.a, null, r.a.createElement(l.a, {
						profileName: e.profileName
					})), r.a.createElement(m.a, null, r.a.createElement(p.a, {
						profileName: e.profileName
					})), r.a.createElement(u.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			v.defaultProps = {
				isOverlay: !1
			}, t.a = v
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: o,
					items: c,
					minimizedLength: b,
					onLoadMore: x,
					pending: h,
					renderItem: f,
					title: v
				} = e, [E, g] = Object(i.useState)(!1), O = c.length > b || s, _ = (!O || E ? c : r()(c, b)).map(e => f({
					item: e
				})), C = () => {
					E || g(!0), E && !s && g(!1), s && x && x()
				};
				return a.a.createElement(d.a, {
					className: t,
					headerButton: o,
					title: v
				}, _, a.a.createElement(u.a, null, a.a.createElement(p.a, null, O && (() => {
					const e = !E || s && x ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: C
					}, h ? a.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: c.Yb
			}, t.a = b
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
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				h = s.n(x);
			const f = Object(a.c)({
					currentUser: b.k,
					moderated: u.o,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				v = Object(i.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				E = e => {
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
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
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
				return r.a.createElement(d.a, {
					className: h.a.container,
					title: u,
					items: p,
					renderItem: E,
					hasMoreItems: a,
					onLoadMore: c,
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const x = Object(c.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.p
				}),
				h = Object(i.b)(x, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.i)(t.profileName, !0))
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
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(a.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: b.a.meta
					}, t.subredditCount && n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = h(e => {
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
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				x = s.n(b);
			const h = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const n = Object(u.Ab)(e, {
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
					o = r.a.createElement(d.b, {
						iconUrl: s.styles.icon,
						className: x.a.subredditIcon
					});
				return r.a.createElement(l.a, {
					className: x.a.communityItemContainer,
					key: s.id
				}, r.a.createElement("div", {
					className: x.a.iconContainer
				}, r.a.createElement(a.a, {
					to: s.path
				}, o)), r.a.createElement("div", {
					className: x.a.communityDescription
				}, r.a.createElement("div", {
					className: x.a.communityName
				}, r.a.createElement(a.a, {
					to: s.path
				}, s.prefixedName)), r.a.createElement("div", {
					className: x.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(i.b)(h)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? r.a.createElement(c.a, {
					title: n.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
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
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const x = Object(a.b)(a.d, b.a);
			var h = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = s.n(f),
				E = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts");
			const O = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.s)(e, Object(h.n)(e, s))
				}
			}, x);
			t.a = Object(i.b)(O)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: I
				})
			});
			const _ = E.a.wrapped(u.a, "TrophyItem", v.a),
				C = E.a.div("TrophyIcon", v.a),
				j = E.a.h5("TrophyName", v.a),
				y = E.a.div("TrophyContent", v.a),
				k = E.a.wrapped(d.c, "Description", v.a),
				I = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(_, {
						key: t.id
					}, r.a.createElement(C, null, t.url ? r.a.createElement("a", {
						target: g.d.BLANK,
						rel: g.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.T(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), r.a.createElement(y, null, r.a.createElement(j, null, t.name), r.a.createElement(k, null, t.description)))
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				m = "snoovatars",
				u = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				x = s.n(b);
			var h = e => {
					let {
						sourceUrl: t,
						username: s,
						post: n
					} = e;
					const [r, i] = new URL(t).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?u:m}/shared/${e}.png`
					}(i);
					return o.a.createElement("div", {
						className: x.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: x.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(p.a, {
						isHovercard: !1,
						username: s,
						isAvatarPost: !0,
						post: n,
						share: {
							username: r,
							avatarId: i
						}
					}))
				},
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/components/SourceLink/index.m.less"),
				O = s.n(g),
				_ = s("./src/lib/lessComponent.tsx"),
				C = s("./src/telemetry/models/Outbound.ts"),
				j = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const y = _.a.wrapped(E.a, "OutboundLinkIcon", O.a),
				k = _.a.div("SourceLinkWrapper", O.a);

			function I(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n,
					pageLayer: c
				} = e, d = n ? C.SourceElement.PostLink : C.SourceElement.ListingPostLink, {
					source: l
				} = s, m = s.isSponsored || Object(r.u)(c), u = Object(v.a)(s), p = Object(j.a)();
				return !l || p ? null : u ? o.a.createElement(h, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : o.a.createElement(k, {
					className: Object(i.a)({
						[O.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(f.a, {
					href: l.url,
					isSponsored: m,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...s,
					isSponsored: m
				}), o.a.createElement(y, {
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
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
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
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...x
						} = this.props, h = this.state.isHovered, f = Object(c.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(a.t, m({
							className: e,
							priority: x.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: f,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, x))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...x
						} = this.props, h = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(a.t, m({
							className: e,
							priority: x.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: h,
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
			t.a = Object(i.a)(Object(r.c)(p))
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
				c = s.n(a);
			const d = r.a.div("WidgetBackground", c.a),
				l = r.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				j = s.n(C);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => r.a.createElement(b.a, {
					className: Object(d.a)(j.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: j.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: j.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: j.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(N, y({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(h.t, {
					className: j.a.bottomButton,
					kind: h.b.Button,
					priority: h.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(c.c)({
					hideNSFWPref: O.F,
					nightmode: O.db
				}),
				N = Object(i.b)(I)(e => r.a.createElement("div", {
					className: Object(d.a)(j.a.communityItemContainer, {
						[j.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(E.a, {
					className: j.a.communityItemExpandCenter,
					widthRight: x.s
				}, r.a.createElement("div", {
					className: j.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: j.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: j.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), r.a.createElement("div", {
					className: j.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: j.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: j.a.nsfwFlair,
					flair: {
						type: g.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(d.a)(j.a.communityCta, j.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(h.t, {
					className: j.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
					className: j.a.communityDescription
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
				return t === n.a.PROFILE ? Object(o.e)(e) : Object(o.d)(e)
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
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				E = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				g = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				O = s.n(g);
			var _ = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== u.a.Twitter ? null : (r = o.a.createElement(v.a, {
						className: O.a.twitterLogo
					}), a = x.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, o.a.createElement(E.a, null, o.a.createElement("span", {
						className: O.a.icon
					}, r), o.a.createElement(h.b, {
						className: O.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: O.a.linkTitle
					}, o.a.createElement("span", {
						className: O.a.name
					}, i), o.a.createElement(f.a, {
						className: O.a.linkIcon
					})), o.a.createElement("div", {
						className: O.a.linkDescription
					}, a))))
				},
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				j = s.n(C);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(i.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(b.Ab)(e, {
						userName: s.name
					}) : null
				}
			}), I = Object(r.b)(k, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(I(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(a.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, y._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: j.a.account
				}, o.a.createElement(_, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: v.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.Q,
					showPromotedCTA: f.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: d.s,
					flairStyleTemplate: d.W,
					showCTAExperimentDesign: p.a
				},
				g = Object(n.b)(() => Object(o.c)(E), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === a.a.upvoted ? Object(r.jb)(s) : Object(r.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.fb)(s)),
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
			t.a = e => Object(l.b)(g(Object(c.b)(e)))
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
				return c
			})), s.d(t, "i", (function() {
				return d
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
				c = .2,
				d = .1,
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
				c = s.n(a);
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
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return v
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "i", (function() {
				return I
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "l", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/lib/makeRequest/index.ts"),
				a = s("./src/reddit/models/Subreddit/index.ts"),
				c = s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				d = s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				m = s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				u = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				p = s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				x = s("./src/redditGQL/operations/ReportTalk.json"),
				h = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				f = s("./src/redditGQL/types.ts");
			const v = (e, t) => Object(r.a)(e, {
					...x,
					variables: t
				}),
				E = async (e, t) => {
					const s = await Object(r.a)(e, {
						...m,
						variables: t
					});
					return !!Object(i.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(f.H.Talk)
				}, g = async (e, t) => {
					var s, n;
					const o = await Object(r.a)(e, {
						...u,
						variables: t
					});
					return !!Object(i.c)(o) && (null !== (n = null === (s = o.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== n ? n : []).includes(f.H.Talk)
				}, O = async e => {
					var t;
					const s = await Object(r.a)(e, l);
					return Object(i.c)(s) && null !== (t = s.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, _ = (e, t, s) => t.type === a.f.User ? Object(r.a)(e, {
					...c,
					variables: s
				}) : Object(r.a)(e, {
					...d,
					variables: {
						...s,
						subredditId: t.id
					}
				}), C = (e, t, s) => t.type === a.f.User ? Object(r.a)(e, {
					...b,
					variables: {
						input: s
					}
				}) : Object(r.a)(e, {
					...p,
					variables: {
						input: {
							...s,
							subredditId: t.id
						}
					}
				}), j = () => Object(o.a)(), y = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, k = {
					[f.j.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[f.j.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[f.j.RoomLimitExceeded]: n.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[f.j.ConcurrentRoomLimitExceeded]: n.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[f.j.SubredditRoomLimitExceeded]: n.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, I = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, N = {
					[f.J.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[f.J.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, S = (e, t) => Object(r.a)(e, {
					...h,
					variables: t
				})
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
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
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
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
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
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.jb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.tb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.jb)(s),
					userSubreddit: Object(r.tb)(s)
				}),
				d = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, i, a) => c => ({
					...Object(r.o)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(c, e, void 0, a),
					subreddit: Object(r.jb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.jb)(n)
				})
		},
		"./src/reddit/helpers/trackers/talkCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/lib/eventTools/index.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/postCreations.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...i.o(e),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_room"
					}
				}),
				c = () => e => ({
					...i.o(e),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_topic_picker"
					}
				}),
				d = () => e => ({
					...i.o(e),
					source: "liveaudio",
					action: o.c.CLICK,
					noun: "go_live",
					subreddit: i.jb(e),
					liveAudioRoom: {
						title: Object(r.sb)(e),
						topicIds: Object(r.rb)(e).topics.map(e => e.id)
					}
				}),
				l = () => e => ({
					...i.o(e),
					source: "liveaudio",
					action: o.c.CLICK,
					noun: "schedule",
					subreddit: i.jb(e),
					liveAudioRoom: {
						title: Object(r.sb)(e),
						topicIds: Object(r.rb)(e).topics.map(e => e.id)
					}
				}),
				m = () => e => ({
					...i.o(e),
					source: "post_composer",
					action: o.c.CLICK,
					noun: "overflow",
					subreddit: i.jb(e),
					liveAudioRoom: {
						title: Object(r.sb)(e)
					}
				}),
				u = e => t => ({
					...i.o(t),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					subreddit: i.jb(t),
					post: i.K(t, e),
					postEvent: {
						eventState: n.a.Future
					}
				})
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(n.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: s,
						avatarShareUrl: n
					} = e;
					const a = i.test(n.trim()),
						c = o.includes(t),
						d = r.includes(s);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.b)(t)
			})
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
				c = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.jg,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(n.a)(i, e => e === o.ag)
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.2d96879f938f6e66f50a.js.map