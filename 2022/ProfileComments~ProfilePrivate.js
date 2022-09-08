// https://www.redditstatic.com/desktop2x/ProfileComments~ProfilePrivate.733b7bc61f3e891376ff.js
// Retrieved at 9/8/2022, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfilePrivate"], {
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
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: m,
					callToAction: u,
					caption: h
				} = t;
				if (!m || !m.url) return null;
				let b = m.displayText;
				m.displayText.length >= 40 && (b = m.displayText.slice(0, 40 - "...".length) + "...");
				const x = Object(c.s)(s, m.displayText),
					g = Object(c.t)(s) ? b : h,
					C = Object(c.t)(s) ? s.subcaption : m.displayText,
					O = Object(i.a)(p.a.leftSideContent, {
						[p.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[p.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					E = Object(i.a)(p.a.displayUrl, {
						[p.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: O
				}, h && !n && !x && r.a.createElement("span", {
					className: p.a.caption,
					title: h,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, h), !x && r.a.createElement(d.a, {
					href: m.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: E,
					"data-adclicklocation": l.a.CTA_URL
				}, b), x && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: p.a.productTitle
				}, g), r.a.createElement("span", {
					className: p.a.subcaption
				}, C))), u && r.a.createElement(a.a, {
					className: p.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, u))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				b = s("./src/reddit/components/Econ/Audio/index.m.less"),
				x = s.n(b),
				g = s("./src/config.ts"),
				C = s("./node_modules/react-redux/es/index.js"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				v = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => Math.floor(10 * Math.random()) + 1;
			var j = e => {
				let {
					postId: t
				} = e;
				const s = Object(C.e)(O.db),
					[r, a] = Object(o.useState)(!1),
					[d, c] = Object(o.useState)(k());
				return Object(o.useEffect)(() => {
					const e = setInterval(() => {
						a(!0), setTimeout(() => a(!1), 3500), c(k())
					}, 6e3);
					return () => clearInterval(e)
				}, []), n.a.createElement("div", {
					className: x.a.classicSpeaker
				}, r && n.a.createElement(v.a, {
					ringId: `${t}`,
					className: Object(i.a)(x.a.speakerRings, {
						[x.a.nightMode]: s
					}),
					ringClassName: "speakerRing",
					isAnimated: !0
				}), n.a.createElement("img", {
					key: `audioPostAvatar--${d}`,
					className: x.a.snoovatar,
					src: `${g.a.assetPath}/img/talk/avatars/${d}.png`,
					alt: f._("Reddit Talk", null, {
						hk: "XNl4V"
					})
				}), !r && n.a.createElement("div", {
					className: x.a.muteContainer
				}, n.a.createElement(E.a, {
					className: x.a.muteIcon
				})))
			};
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: o
					} = t;
					return (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement(j, {
						postId: o
					})) : n.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, n.a.createElement(E.a, {
						className: x.a.muteIcon
					}))
				},
				y = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/ExpandoButton/index.tsx"),
				w = s("./src/reddit/components/Flatlist/index.tsx"),
				S = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				L = s("./src/reddit/components/ModModeReports/index.tsx"),
				N = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				A = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostMeta/index.tsx"),
				B = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				V = s("./src/reddit/components/PostTitle/index.tsx"),
				U = s("./src/reddit/components/PostTopMeta/index.tsx"),
				K = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				J = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				H = s("./src/reddit/models/Audio/index.ts"),
				z = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				q = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				$ = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Q = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Y = s("./src/reddit/helpers/localStorage/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(oe),
				re = s("./src/reddit/components/ClassicPost/index.m.less"),
				ie = s.n(re);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const de = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: g,
					eventFactory: C,
					first: O,
					flairStyleTemplate: E,
					formatTitle: v,
					hostPostData: f,
					isCheckboxSelected: k,
					isCurrentUserProfilePost: j,
					isFrontpage: P,
					isGalleryTileLayoutDefault: q,
					isLoggedIn: oe,
					isOverlay: re,
					imageGalleryCurrentItem: de,
					moderatorPermissions: ce,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					onSizeChanged: he,
					poll: be,
					post: xe,
					postId: ge,
					redditStyle: Ce,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: Ee,
					showEditFlair: ve,
					showMedia: fe,
					shouldShowInsightsButton: ke,
					subredditOrProfile: je,
					toggleCheckbox: Pe,
					userIsOp: _e,
					shouldShowGalleryTileOption: ye,
					showPromotedCTA: Ie,
					showCTAExperimentDesign: we
				} = e, Se = Object(l.a)(), Te = Object(c.a)(x);
				Object(o.useEffect)(() => {
					he && Te !== x && he(xe.id)
				}, [x, he, xe.id, Te]);
				const Me = Ce ? void 0 : E,
					Le = s || void 0,
					Ne = Object(X.a)(ce),
					Re = Object($.a)(ce),
					Ae = Object(Q.a)(ce),
					De = le && X.a,
					Fe = Object(M.a)(xe),
					Be = Object(N.c)(xe),
					We = !!xe.media && xe.media.type === z.o.RTJSON,
					Ve = _e && We,
					Ue = g && !fe,
					Ke = !!xe.media && Object(z.H)(xe.media),
					Je = !!xe.recommendationContext,
					He = {
						flairStyleTemplate: Me,
						post: xe,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: j,
						isOverlay: re,
						shouldShowSubscribeButton: !(P && oe) || Je && oe,
						subredditOrProfile: je
					},
					ze = Object(r.t)(xe, de),
					{
						source: Ge
					} = ze,
					[qe, Ze] = Object(o.useState)(!1),
					$e = Object(o.useCallback)(() => {
						Ze(!qe), Object(Y.Pb)(), Se(Object(se.d)(ge))
					}, [qe, ge, Se]);
				let Qe = n.a.createElement(G.a, {
					className: ie.a.classicThumbnail,
					crosspost: Le && xe,
					isMeta: xe.isMeta,
					post: Le || xe,
					redditStyle: Ce,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: Ke
				});
				Object(H.b)(xe) && (Qe = n.a.createElement(_, {
					post: xe
				}));
				const Xe = n.a.createElement(D.a, {
					className: Object(i.a)(ne.a.classicPostStyles, ie.a.postContainer, Object(te.a)(e), {
						[ie.a.mFirst]: O,
						[ie.a.shouldShowOverflow]: ke
					}, t),
					isOverlay: re,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Me)
					},
					post: xe,
					onClick: me,
					eventFactory: C
				}, n.a.createElement(W.a, {
					model: xe,
					handleVote: b,
					showBulkActionCheckbox: Ee,
					isCheckboxSelected: k,
					toggleCheckbox: Pe,
					flairStyleTemplate: Me,
					redditStyle: Ce,
					postId: ge
				}), n.a.createElement(A.a, {
					className: ke ? ie.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, n.a.createElement(y.a, {
					className: ie.a.eventMeta,
					post: xe
				}), n.a.createElement("div", {
					className: ie.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? ie.a.expandoContainer : ie.a.thumbnailContainer
				}, !Ue && Qe, n.a.createElement(I.a, {
					crosspost: Le,
					className: ie.a.rightExpando,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(ie.a.content, {
						[ie.a.showBulkActionCheckbox]: Ee
					}),
					"data-click-id": "body"
				}, !!xe.recommendationContext && n.a.createElement(R.a, {
					content: xe.recommendationContext.content,
					layout: Z.g.Classic,
					post: xe
				}), n.a.createElement(V.c, {
					className: be ? ie.a.titleWithPoll : void 0,
					format: v,
					poll: be,
					post: xe,
					redditStyle: Ce,
					size: V.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: re
				}, xe.source && !Le && !xe.isSurveyAd && n.a.createElement(J.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(d.a)(xe))), n.a.createElement(F.a, ae({
					key: "PostMeta"
				}, He)), le && Ne && Fe && n.a.createElement(T.a, {
					thing: xe
				}), le && Ne && Be && n.a.createElement(L.a, {
					onIgnoreReports: pe,
					reportable: xe
				}), Ie && Ge && Ge.url && !xe.isSurveyAd && n.a.createElement(m.a, {
					ctaExperimentDesign: we && "classic",
					className: Object(i.a)(ie.a.adLinkWrapper, {
						[ie.a.ctaExperiment]: we
					})
				}, n.a.createElement(p.a, {
					post: xe,
					adLinkContent: ze,
					ctaExperimentDesign: we && "classic"
				})), n.a.createElement("div", {
					className: ie.a.flatlistContainer
				}, n.a.createElement(I.a, {
					className: ie.a.leftExpando,
					crosspost: Le,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: ie.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: xe,
					onVoteClick: b
				}), n.a.createElement(w.a, {
					className: ie.a.flatlistSeparator
				}), !xe.isSurveyAd && n.a.createElement(w.c, {
					className: ie.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Re,
					hasModPostPerms: Ne,
					hasModFullPerms: Ae,
					hostPostData: f,
					isOverlay: !!re,
					modModeEnabled: le,
					onClickInsightsButton: $e,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: xe,
					shouldShowInsightsButton: ke,
					showEditPost: Ve,
					showEditFlair: ve,
					tooltipType: re ? U.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(B.b)({
						editPost: !De,
						hide: !De,
						report: !De
					})
				})), n.a.createElement(S.d, null))), Object(ee.a)(xe, ie.a, Oe, x, ye, q), je && qe && n.a.createElement(h.a, {
					className: ie.a.creatorStatsContainer,
					post: xe,
					subreddit: je,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(K.b, null, Xe)
			});
			t.default = Object(q.a)(de)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: r,
						style: i
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, g = 10 * d.L;
			class C extends n.a.Component {
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
					}, g), this.onShowMore = e => {
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
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), n.a.createElement("a", {
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
			var O = C,
				E = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./node_modules/lodash/noop.js"),
				f = s.n(v),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				P = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/authoring.ts"),
				y = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				K = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/overlay/index.ts"),
				H = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				G = s("./src/reddit/models/Comment/index.ts"),
				q = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				$ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/tooltip.ts"),
				Y = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
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
				ge = s("./src/reddit/icons/fonts/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Oe = xe.a.wrapped(se.b, "OverflowMenu", he.a),
				Ee = xe.a.wrapped(L.a, "ModToolsFlatlist", he.a),
				ve = xe.a.wrapped(D.a, "ModActionsMenu", he.a),
				fe = xe.a.wrapped(ae.b, "DropdownRow", he.a),
				ke = xe.a.wrapped(ce.a, "Flatlist", he.a),
				je = xe.a.button("Button", he.a),
				Pe = Object(V.u)(),
				_e = e => `Comment-${e}--Modal--DeleteComment`,
				ye = e => `Distinguish--Dropdown--${e}`,
				Ie = (e, t) => `${e}--${t}-overflow-menu`,
				we = e => `View--Reports--${e}`,
				Se = Object(i.c)({
					activeTooltipId: X.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.a)(e) === _e(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.D)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: V.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === s.id
					},
					subreddit: V.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: Y.e
				});
			class Te extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.d)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(H.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						showModTools: r
					} = this.props, i = Object(K.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(Ee, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(ve, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(M.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(F.a)(e);
					if (s && Object(F.c)(e) && !t) return n.a.createElement(N.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === we(e.id),
						id: we(e.id)
					}, n.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: we(e.id)
					}), e.ignoreReports ? n.a.createElement(le.a, null) : n.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(K.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(N.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === ye(e.id)
					}, n.a.createElement(Ce.a, null), n.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === ye(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: ye(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: o,
						currentUser: r,
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, h = Object(K.a)(c), b = !!r && r.displayText === e.author, x = (!l && !e.isLocked || h && a) && !(Object(G.g)(e) && u), g = r && e.isGildable && !(Object(G.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(ke, null, x && n.a.createElement(je, {
						onClick: this.handleReply,
						disabled: d
					}, E.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), g && n.a.createElement(je, {
						onClick: this.handleGild
					}, E.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(re.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(je, {
						onClick: this.sendCommentEventWithNameShare
					}, E.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(Oe, {
						dropdownId: Ie(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && n.a.createElement(fe, {
						displayText: E.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(ge.a, {
						name: be.a.report
					})), n.a.createElement(fe, {
						displayText: e.isSaved ? E.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : E.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(ge.a, {
						name: be.a.saved
					}) : n.a.createElement(ge.a, {
						name: be.a.save
					})), b && n.a.createElement(fe, {
						displayText: E.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(ge.a, {
						name: be.a.edit
					})), b && n.a.createElement(fe, {
						displayText: E.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(ge.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(R.a, {
						actionText: E.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: E.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: E.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: E.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: f.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = Pe(Object(r.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(_.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(y.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(y.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(T.h)({
							tooltipId: ye(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(T.h)({
							tooltipId: we(s.id)
						})),
						onToggleSave: () => e(Object(P.o)(s.id)),
						handleDelete: () => {
							e(Object(w.i)(_e(s.id))), e(Object(T.h)({
								tooltipId: Ie(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(k.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(z.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(J.a)(t)), e(Object(_.g)(n))
						},
						handleReply: t => {
							const o = Object(k.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(J.a)(t)), e(Object(_.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(w.i)(_e(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(Te)))),
				Le = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ne = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				De = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Fe = s.n(De);
			const Be = xe.a.wrapped(Le.a, "TopMeta", Fe.a),
				We = xe.a.div("ProfileCommentWrapper", Fe.a),
				Ve = xe.a.div("CommentBody", Fe.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: Z.e
				})),
				Ke = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => n.a.createElement(Ne.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ke(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return n.a.createElement(We, {
					className: Object(a.a)({
						[Fe.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ve, null, r ? l() : n.a.createElement(O, {
					height: d.Xb,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Me, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				return P
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/CrosspostBox/index.m.less"),
				v = s.n(E),
				f = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				P = 1,
				_ = f.a.div("Container", v.a),
				y = f.a.div("PostMetaWrapper", v.a),
				I = f.a.wrapped(u.c, "PostTitle", v.a),
				w = f.a.div("FlatList", v.a),
				S = f.a.div("FlatItem", v.a),
				T = f.a.span("FlatListDotSpacer", v.a),
				M = f.a.wrapped(_, "LinkContainer", v.a),
				L = f.a.div("Content", v.a),
				N = f.a.div("ThumbnailContainer", v.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: C.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Qb.TOPIC),
					shouldOpenPostInNewTab: O.jb
				}),
				A = Object(i.b)(R);
			t.c = Object(g.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(M, {
					className: c
				}, r.a.createElement(L, null, r.a.createElement(y, null, r.a.createElement(p.a, d)), D(i), i.source && r.a.createElement(h.a, {
					post: i
				}), B(e)), V(e)) : r.a.createElement(_, {
					className: c
				}, r.a.createElement(y, null, r.a.createElement(p.a, d)), D(i), F(e), B(e))
			}));
			const D = e => r.a.createElement(I, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, k({}, o, {
						className: v.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(T, null), r.a.createElement(S, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				V = e => r.a.createElement(N, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				a = s.n(i),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: o,
					isAnimated: i = !1
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(a.a.ringsContainer, t, i ? a.a.animated : "")
				}, n.a.createElement(d.a, {
					ringId: o,
					className: Object(r.a)(a.a.innerRing, `${s}Inner`)
				}), n.a.createElement(c.a, {
					ringId: o,
					className: Object(r.a)(a.a.middleRing, `${s}Middle`)
				}), n.a.createElement(l.a, {
					ringId: o,
					className: Object(r.a)(a.a.outerRing, `${s}Outer`)
				}))
			}
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				C = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = s("./src/reddit/components/ExpandoButton/index.m.less"),
				v = s.n(E);
			const f = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(v.a.icon, v.a.hideOnHover);
					if (t) return r.a.createElement(h.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(h.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(h.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(h.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return r.a.createElement(h.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(h.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return r.a.createElement(h.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return r.a.createElement(h.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(h.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = f(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: E,
					useMediaIcons: f
				} = e, j = s || b, P = Object(i.e)(g.b), _ = Object(i.e)(g.c), y = t => {
					(P || _) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, I = j.media, w = Object(x.p)(b), S = n && !!s;
				return I && !w && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(u.a)(j)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": O.a.MEDIA,
					onClick: E
				}, p ? r.a.createElement(h.a, {
					name: "collapse",
					className: v.a.icon
				}) : f ? r.a.createElement(r.a.Fragment, null, k(j.media && j.media.type, S, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(v.a.icon, v.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: v.a.icon
				})) : j.source && j.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? C.SourceElement.PostImage : C.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(v.a.icon, v.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(j.permalink),
					rel: "nofollow",
					onClick: y
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: v.a.icon
				}))
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(a.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				E = s.n(O);
			const v = Object(i.b)(() => Object(a.c)({
				comment: x.b,
				isAwarded: (e, t) => {
					const s = Object(x.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: C.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var f = Object(l.a)(v(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isAwarded: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							d({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(c.a)(E.a.commentOuterWrapper, {
							[E.a.isLast]: a,
							[E.a.isAwarded]: r,
							[E.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(E.a.commentWrapper, {
							[E.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: E.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: E.a.commentSeparator
					}), n.a.createElement("div", {
						className: E.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				k = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				y = s.n(_),
				I = s("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(j.u)({
					currentProfileName: j.i,
					isCommentsPage: j.x,
					isCommentPermalink: j.w,
					isProfilePostListing: j.L,
					pageLayer: e => e
				}),
				T = I.a.wrapped(k.a, "OverviewCommentPost", y.a),
				M = I.a.wrapped(r.default, "ClassicPost", y.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(P.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(T, w({}, d, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(f, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(f, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(M, w({}, d, {
					inSubredditOrProfile: !1
				}))
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
				g = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(C),
				E = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				k = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(k);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = c.a.wrapped(x.default, "InternalLink", j.a), y = c.a.div("Wrapper", j.a), I = c.a.div("Row", j.a), w = c.a.wrapped(E.a, "CommentIcon", j.a), S = c.a.div("TitleContainer", j.a), T = c.a.div("PostTitleContainer", j.a), M = c.a.wrapped(p.c, "PostTitle", j.a), L = c.a.wrapped(u.d, "PostTopMeta", j.a), N = c.a.wrapped(u.a, "MetaSeparator", j.a), R = Object(r.b)(() => Object(i.c)({
				comment: v.b,
				isBlockingInterstitialEnabled: f.b,
				isBlockingInterstitialV2Enabled: f.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(N, null), n.a.createElement(L, {
					metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, D = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return n.a.createElement(_, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.a, {
					className: Object(a.a)(O.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(y, {
					style: {
						background: Object(g.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(w, null), n.a.createElement(S, null, P._("{postAuthor} commented on {postTitle} {postMeta}", [P._param("postAuthor", D({
					...e
				})), P._param("postTitle", n.a.createElement(T, null, n.a.createElement(M, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: j.a.postTitleTitle
				}))), P._param("postMeta", A(e))], {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(d.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: l,
					theme: u,
					...h
				} = e;
				return n.a.createElement("div", p({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i,
					"data-adclicklocation": c.a.BACKGROUND
				}, h), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(i.a, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: k,
					isTopicPage: j,
					post: P,
					shouldShowSubscribeButton: _,
					subredditOrProfile: y,
					tooltipType: I
				} = e, w = !!j, S = Object(O.a)(), T = Object(r.e)(e => !!y && Object(i.i)(e, y.id));
				return n.a.createElement("div", {
					className: f.a.metaContainer
				}, !o && !P.isSponsored && y && n.a.createElement(d.a, {
					postId: P.id,
					subredditName: y.name
				}, n.a.createElement(u.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: y.url,
						state: S
					}
				}, y.displayText)), y && y.isQuarantined && n.a.createElement(p.a, null), !o && !P.isSponsored && y && _ && !v && n.a.createElement(h.a, {
					className: f.a.SubscribeButton,
					getEventFactory: e => Object(C.k)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: y.name,
						type: Object(E.h)(y) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: P.id,
					size: x.d.XXS,
					small: !0
				}), !o && !P.isSponsored && n.a.createElement(g.b, null), !o && !P.isSponsored && n.a.createElement(c.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), n.a.createElement(m.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: I,
					isModWithUserNotesPermissions: T
				}), n.a.createElement(l.a, {
					displayText: y ? y.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: I
				}), !w && n.a.createElement(a.a, {
					hideCta: s,
					thing: P,
					tooltipType: k ? m.c.Lightbox : void 0
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: g,
					isVoteCountAnimation: C,
					postId: O,
					shouldShowUpvoteRatioOnHover: E
				} = e, v = `upvote-button-${t.id}${g?"-overlay":""}`;
				return n.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), n.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: v,
					isVoteCountAnimation: C,
					isCountAnimShadowTestEnabled: u,
					postId: O,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: E
					}),
					shouldShowUpvoteRatioOnHover: E
				}))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/lib/LRUCache/index.ts"),
				O = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				v = s("./src/reddit/components/PostList/index.m.less"),
				f = s.n(v);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 500,
				P = new C.a(j),
				_ = new C.a(j),
				y = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				I = (e, t, s, o, n, r) => {
					const i = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = P.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, P.set(i, a)), a
				},
				w = (e, t) => {
					const s = `click-${e}`;
					let o = _.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, _.set(s, o)), o
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new C.a(j), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && O.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = O.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = O.c.end(this.timerId);
						setTimeout(() => Object(O.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && O.c.cancel(this.timerId), e.itemIds.length && (this.timerId = O.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && O.c.has(this.timerId)) {
						const e = O.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(O.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && O.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && n()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return O.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = O.c.end(e);
					setTimeout(() => s(t(o, E.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...s
					} = this.props, {
						itemIds: o,
						...n
					} = e, r = Object.keys(s), i = Object.keys(n);
					return i.length !== r.length || !!i.some(e => s[e] !== n[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: c
					} = this.props, l = `post-${r}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = I(u, r, s, a, d, this.props), x = {
							key: h,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: w(e, this.props),
							postId: u
						}, C = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(g.a, {
								postId: x.postId
							}, i.a.createElement(C, k({}, x, e)))
						}, this.scrollChildCache.set(l, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: o
					} = this.props;
					return i.a.createElement("div", {
						className: f.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: o
					} = this.props;
					return i.a.createElement("div", {
						className: f.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: y[s]
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: o,
						onLoadMore: n
					} = this.props, r = o.map((s, n, r) => {
						const i = n === o.length - 1,
							a = n && o[n - 1],
							d = !i && o[n + 1],
							c = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(x.a)(s) && (!d || !Object(x.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, i, c, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(u.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n,
						viewportTopPadding: h.f + h.r
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = S
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				h = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/showPromotedCTA.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const O = {
					autoplayPref: C.b,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: C.Q,
					showPromotedCTA: g.a,
					moderatorPermissions: h.m,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: c.s,
					flairStyleTemplate: c.W,
					showCTAExperimentDesign: u.a
				},
				E = Object(o.b)(() => Object(n.c)(O), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(o)
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
			t.a = e => Object(l.b)(E(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
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
			const o = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(i.a, {
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
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, o, r, i) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, o) => n.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
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
				return g
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				h = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
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
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				a = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.ib)(s),
					post: Object(r.J)(s, e),
					userSubreddit: Object(r.sb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.J)(s, t),
					subreddit: Object(r.ib)(s),
					userSubreddit: Object(r.sb)(s)
				}),
				c = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.n)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.J)(t, e, void 0, 0),
					profile: Object(r.S)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.J)(o, e, void 0, s)
				}),
				p = (e, t, s, o, i, a) => d => ({
					...Object(r.n)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.J)(d, e, void 0, a),
					subreddit: Object(r.ib)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				u = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.J)(o, e, void 0, s),
					subreddit: Object(r.ib)(o)
				})
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.cg,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(o.a)(i, e => e === n.Tf)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfilePrivate.733b7bc61f3e891376ff.js.map