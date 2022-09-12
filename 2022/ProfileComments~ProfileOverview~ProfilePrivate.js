// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.a2ccd2718f776efdf4fc.js
// Retrieved at 9/12/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePrivate"], {
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
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
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let x = m.displayText;
				m.displayText.length >= 40 && (x = m.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(c.s)(s, m.displayText),
					g = Object(c.t)(s) ? x : b,
					C = Object(c.t)(s) ? s.subcaption : m.displayText,
					E = Object(a.a)(p.a.leftSideContent, {
						[p.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[p.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					O = Object(a.a)(p.a.displayUrl, {
						[p.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: E
				}, b && !n && !h && r.a.createElement("span", {
					className: p.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && r.a.createElement(d.a, {
					href: m.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: O,
					"data-adclicklocation": l.a.CTA_URL
				}, x), h && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: p.a.productTitle
				}, g), r.a.createElement("span", {
					className: p.a.subcaption
				}, C))), u && r.a.createElement(i.a, {
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				x = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/models/Audio/index.ts"),
				g = s("./src/reddit/selectors/experiments/econ/index.ts"),
				C = s("./src/reddit/components/Econ/Audio/index.m.less"),
				E = s.n(C),
				O = s("./src/config.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				k = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = () => Math.floor(10 * Math.random()) + 1;
			var P = e => {
					let {
						postId: t
					} = e;
					const s = Object(x.e)(f.db),
						[r, i] = Object(o.useState)(!1),
						[d, c] = Object(o.useState)(j());
					return Object(o.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), c(j())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), n.a.createElement("div", {
						className: E.a.classicSpeaker
					}, r && n.a.createElement(k.a, {
						ringId: `${t}`,
						className: Object(a.a)(E.a.speakerRings, {
							[E.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: E.a.snoovatar,
						src: `${O.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: _._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && n.a.createElement("div", {
						className: E.a.muteContainer
					}, n.a.createElement(v.a, {
						className: E.a.muteIcon
					})))
				},
				w = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: o,
						author: r
					} = t;
					return Object(x.e)(g.t) && s.roomStatus === h.b.NotStarted ? n.a.createElement(w.a, {
						postId: o,
						author: r,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: E.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement(P, {
						postId: o
					})) : n.a.createElement("div", {
						className: E.a.endedClassicContainer
					}, n.a.createElement(v.a, {
						className: E.a.muteIcon
					}))
				},
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				S = s("./src/reddit/components/ExpandoButton/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				N = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				L = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				V = s("./src/reddit/components/PostMeta/index.tsx"),
				U = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				J = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				H = s("./src/reddit/components/PostTitle/index.tsx"),
				z = s("./src/reddit/components/PostTopMeta/index.tsx"),
				G = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				K = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				X = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Y = s("./src/reddit/constants/postLayout.ts"),
				Q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ee = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				te = s("./src/reddit/helpers/localStorage/index.ts"),
				se = s("./src/reddit/helpers/search/renderMedia.tsx"),
				oe = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ne = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				re = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ae = s.n(re),
				ie = s("./src/reddit/components/ClassicPost/index.m.less"),
				de = s.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const le = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: x,
					isExpanded: g,
					inSubredditOrProfile: C,
					eventFactory: E,
					first: O,
					flairStyleTemplate: f,
					formatTitle: v,
					hostPostData: k,
					isCheckboxSelected: _,
					isCurrentUserProfilePost: j,
					isFrontpage: P,
					isGalleryTileLayoutDefault: w,
					isLoggedIn: I,
					isOverlay: X,
					imageGalleryCurrentItem: re,
					moderatorPermissions: ie,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					onSizeChanged: be,
					poll: xe,
					post: he,
					postId: ge,
					redditStyle: Ce,
					scrollerItemRef: Ee,
					showBulkActionCheckbox: Oe,
					showEditFlair: fe,
					showMedia: ve,
					shouldShowInsightsButton: ke,
					subredditOrProfile: _e,
					toggleCheckbox: je,
					userIsOp: Pe,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Ie,
					showCTAExperimentDesign: ye
				} = e, Te = Object(l.a)(), Se = Object(c.a)(g);
				Object(o.useEffect)(() => {
					be && Se !== g && be(he.id)
				}, [g, be, he.id, Se]);
				const Me = Ce ? void 0 : f,
					Ne = s || void 0,
					Re = Object(ee.a)(ie),
					Le = Object(Q.a)(ie),
					Ae = Object($.a)(ie),
					De = le && ee.a,
					Fe = Object(L.a)(he),
					Be = Object(D.c)(he),
					We = !!he.media && he.media.type === q.o.RTJSON,
					Ve = Pe && We,
					Ue = C && !ve,
					Je = !!he.media && Object(q.H)(he.media),
					He = !!he.recommendationContext,
					ze = {
						flairStyleTemplate: Me,
						post: he,
						inSubredditOrProfile: C,
						isCurrentUserProfilePost: j,
						isOverlay: X,
						shouldShowSubscribeButton: !(P && I) || He && I,
						subredditOrProfile: _e
					},
					Ge = Object(r.t)(he, re),
					{
						source: Ke
					} = Ge,
					[qe, Ze] = Object(o.useState)(!1),
					Xe = Object(o.useCallback)(() => {
						Ze(!qe), Object(te.Pb)(), Te(Object(ne.d)(ge))
					}, [qe, ge, Te]);
				let Ye = n.a.createElement(Z.a, {
					className: de.a.classicThumbnail,
					crosspost: Ne && he,
					isMeta: he.isMeta,
					post: Ne || he,
					redditStyle: Ce,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: Je
				});
				Object(h.c)(he) && (Ye = n.a.createElement(y, {
					post: he
				}));
				const Qe = n.a.createElement(W.a, {
					className: Object(a.a)(ae.a.classicPostStyles, de.a.postContainer, Object(oe.a)(e), {
						[de.a.mFirst]: O,
						[de.a.shouldShowOverflow]: ke
					}, t),
					isOverlay: X,
					style: {
						...Object(oe.d)(e),
						...Object(oe.b)(Me)
					},
					post: he,
					onClick: me,
					eventFactory: E
				}, n.a.createElement(J.a, {
					model: he,
					handleVote: x,
					showBulkActionCheckbox: Oe,
					isCheckboxSelected: _,
					toggleCheckbox: je,
					flairStyleTemplate: Me,
					redditStyle: Ce,
					postId: ge
				}), n.a.createElement(B.a, {
					className: ke ? de.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, n.a.createElement(T.a, {
					className: de.a.eventMeta,
					post: he
				}), n.a.createElement("div", {
					className: de.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? de.a.expandoContainer : de.a.thumbnailContainer
				}, !Ue && Ye, n.a.createElement(S.a, {
					crosspost: Ne,
					className: de.a.rightExpando,
					isExpanded: !!g,
					post: he,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(a.a)(de.a.content, {
						[de.a.showBulkActionCheckbox]: Oe
					}),
					"data-click-id": "body"
				}, !!he.recommendationContext && n.a.createElement(F.a, {
					content: he.recommendationContext.content,
					layout: Y.g.Classic,
					post: he
				}), n.a.createElement(H.c, {
					className: xe ? de.a.titleWithPoll : void 0,
					format: v,
					poll: xe,
					post: he,
					redditStyle: Ce,
					size: H.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: X
				}, he.source && !Ne && !he.isSurveyAd && n.a.createElement(K.a, {
					href: he.source.url,
					isSponsored: he.isSponsored,
					postId: he.id,
					source: he.source
				}, Object(d.a)(he))), n.a.createElement(V.a, ce({
					key: "PostMeta"
				}, ze)), le && Re && Fe && n.a.createElement(R.a, {
					thing: he
				}), le && Re && Be && n.a.createElement(A.a, {
					onIgnoreReports: pe,
					reportable: he
				}), Ie && Ke && Ke.url && !he.isSurveyAd && n.a.createElement(m.a, {
					ctaExperimentDesign: ye && "classic",
					className: Object(a.a)(de.a.adLinkWrapper, {
						[de.a.ctaExperiment]: ye
					})
				}, n.a.createElement(p.a, {
					post: he,
					adLinkContent: Ge,
					ctaExperimentDesign: ye && "classic"
				})), n.a.createElement("div", {
					className: de.a.flatlistContainer
				}, n.a.createElement(S.a, {
					className: de.a.leftExpando,
					crosspost: Ne,
					isExpanded: !!g,
					post: he,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: de.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: he,
					onVoteClick: x
				}), n.a.createElement(M.a, {
					className: de.a.flatlistSeparator
				}), !he.isSurveyAd && n.a.createElement(M.c, {
					className: de.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Le,
					hasModPostPerms: Re,
					hasModFullPerms: Ae,
					hostPostData: k,
					isOverlay: !!X,
					modModeEnabled: le,
					onClickInsightsButton: Xe,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: he,
					shouldShowInsightsButton: ke,
					showEditPost: Ve,
					showEditFlair: fe,
					tooltipType: X ? z.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(U.b)({
						editPost: !De,
						hide: !De,
						report: !De
					})
				})), n.a.createElement(N.d, null))), Object(se.a)(he, de.a, Ee, g, we, w), _e && qe && n.a.createElement(b.a, {
					className: de.a.creatorStatsContainer,
					post: he,
					subreddit: _e,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(G.b, null, Qe)
			});
			t.default = Object(X.a)(le)
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(a.c)({
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
						style: a
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: a
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(u);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = .75, g = 10 * d.L;
			class C extends n.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (h + 1) && p.a.write(() => {
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
						className: b.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), n.a.createElement("a", {
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
			var E = C,
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./node_modules/lodash/noop.js"),
				v = s.n(f),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				_ = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				y = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/reportFlow/index.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				L = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				J = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/overlay/index.ts"),
				z = s("./src/reddit/helpers/trackers/lightbox.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				K = s("./src/reddit/models/Comment/index.ts"),
				q = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(ue),
				xe = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				ge = s("./src/reddit/icons/fonts/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Ee = he.a.wrapped(se.b, "OverflowMenu", be.a),
				Oe = he.a.wrapped(N.a, "ModToolsFlatlist", be.a),
				fe = he.a.wrapped(D.a, "ModActionsMenu", be.a),
				ve = he.a.wrapped(ie.b, "DropdownRow", be.a),
				ke = he.a.wrapped(ce.a, "Flatlist", be.a),
				_e = he.a.button("Button", be.a),
				je = Object(V.u)(),
				Pe = e => `Comment-${e}--Modal--DeleteComment`,
				we = e => `Distinguish--Dropdown--${e}`,
				Ie = (e, t) => `${e}--${t}-overflow-menu`,
				ye = e => `View--Reports--${e}`,
				Te = Object(a.c)({
					activeTooltipId: Q.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.a)(e) === Pe(s.id)
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
						return Object(X.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: V.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.B)(e, {
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
						return Object(Y.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.e
				});
			class Se extends n.a.PureComponent {
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
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(z.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
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
					} = this.props, a = Object(J.a)(s), i = !!t && t.displayText === e.author;
					if (r && a) return o ? n.a.createElement(Oe, {
						comment: e,
						isCommentAuthor: i
					}) : n.a.createElement(fe, {
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
					if (s && Object(F.c)(e) && !t) return n.a.createElement(R.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === ye(e.id),
						id: ye(e.id)
					}, n.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: ye(e.id)
					}), e.ignoreReports ? n.a.createElement(le.a, null) : n.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(J.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (a && d && !e.bannedBy && (c || i && !o)) return n.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === we(e.id)
					}, n.a.createElement(Ce.a, null), n.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === we(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: we(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: o,
						currentUser: r,
						deleteComment: a,
						isLoggedIn: i,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, b = Object(J.a)(c), x = !!r && r.displayText === e.author, h = (!l && !e.isLocked || b && i) && !(Object(K.g)(e) && u), g = r && e.isGildable && !(Object(K.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(ke, null, h && n.a.createElement(_e, {
						onClick: this.handleReply,
						disabled: d
					}, O.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), g && n.a.createElement(_e, {
						onClick: this.handleGild
					}, O.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(re.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(_e, {
						onClick: this.sendCommentEventWithNameShare
					}, O.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(Ee, {
						dropdownId: Ie(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !x && !d && n.a.createElement(ve, {
						displayText: O.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(ge.a, {
						name: xe.a.report
					})), n.a.createElement(ve, {
						displayText: e.isSaved ? O.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : O.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(ge.a, {
						name: xe.a.saved
					}) : n.a.createElement(ge.a, {
						name: xe.a.save
					})), x && n.a.createElement(ve, {
						displayText: O.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(ge.a, {
						name: xe.a.edit
					})), x && n.a.createElement(ve, {
						displayText: O.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(ge.a, {
						name: xe.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(L.a, {
						actionText: O.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: O.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: O.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: O.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: a,
						toggleModal: p,
						trackClick: v.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = je(Object(r.b)(Te, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(P.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(T.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(S.h)({
							tooltipId: we(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(S.h)({
							tooltipId: ye(s.id)
						})),
						onToggleSave: () => e(Object(j.o)(s.id)),
						handleDelete: () => {
							e(Object(y.i)(Pe(s.id))), e(Object(S.h)({
								tooltipId: Ie(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(k.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(_.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(P.g)(n))
						},
						handleReply: t => {
							const o = Object(k.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(P.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(y.i)(Pe(s.id)))
					}
				})(Object(ae.c)(Object(W.b)(Se)))),
				Ne = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Re = s("./src/reddit/components/RichTextJson/index.tsx"),
				Le = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				De = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Fe = s.n(De);
			const Be = he.a.wrapped(Ne.a, "TopMeta", Fe.a),
				We = he.a.div("ProfileCommentWrapper", Fe.a),
				Ve = he.a.div("CommentBody", Fe.a),
				Ue = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: Z.e
				})),
				Je = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: a,
					showModTools: c
				} = e, l = s => n.a.createElement(Re.b, {
					className: s,
					content: Object(Le.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Je(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return n.a.createElement(We, {
					className: Object(i.a)({
						[Fe.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ve, null, r ? l() : n.a.createElement(E, {
					height: d.Xb,
					isExpanded: r
				}, l)), !t.isDeleted && a && n.a.createElement(Me, {
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
				return _
			})), s.d(t, "a", (function() {
				return j
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				f = s.n(O),
				v = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 8,
				j = 1,
				P = v.a.div("Container", f.a),
				w = v.a.div("PostMetaWrapper", f.a),
				I = v.a.wrapped(u.c, "PostTitle", f.a),
				y = v.a.div("FlatList", f.a),
				T = v.a.div("FlatItem", f.a),
				S = v.a.span("FlatListDotSpacer", f.a),
				M = v.a.wrapped(P, "LinkContainer", f.a),
				N = v.a.div("Content", f.a),
				R = v.a.div("ThumbnailContainer", f.a),
				L = Object(d.c)({
					isCurrentUserProfilePost: C.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Qb.TOPIC),
					shouldOpenPostInNewTab: E.jb
				}),
				A = Object(a.b)(L);
			t.c = Object(g.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return a && !a.media ? r.a.createElement(M, {
					className: c
				}, r.a.createElement(N, null, r.a.createElement(w, null, r.a.createElement(p.a, d)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), V(e)) : r.a.createElement(P, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(p.a, d)), D(a), F(e), B(e))
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
						className: f.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(y, null, r.a.createElement(T, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(S, null), r.a.createElement(T, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(i.a, {
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
				V = e => r.a.createElement(R, null, r.a.createElement(x.a, {
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
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: o,
					isAnimated: a = !1
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, n.a.createElement(d.a, {
					ringId: o,
					className: Object(r.a)(i.a.innerRing, `${s}Inner`)
				}), n.a.createElement(c.a, {
					ringId: o,
					className: Object(r.a)(i.a.middleRing, `${s}Middle`)
				}), n.a.createElement(l.a, {
					ringId: o,
					className: Object(r.a)(i.a.outerRing, `${s}Outer`)
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
				classicView: "_3BVeVQiYsH7FAegU2VUmV-"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				m = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				p = s.n(m),
				u = s("./src/reddit/controls/Button/index.tsx");
			var b = e => n.a.createElement("svg", {
				width: "15",
				height: "19",
				viewBox: "0 0 15 19",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
			}));
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = () => n.a.createElement("span", {
				className: p.a.MicrophoneIcon
			}, n.a.createElement(b, null));
			var g = e => {
				let {} = e;
				const t = Object(r.e)(c.db);
				return n.a.createElement(u.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: h,
					className: Object(a.a)(p.a.StartTalkButton, {
						[p.a.isNightMode]: t
					}),
					priority: u.c.Secondary,
					size: u.d.M,
					iconPosition: u.h.L,
					text: n.a.createElement("span", {
						className: p.a.StartTalkButtonText
					}, x._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: () => {}
				})
			};
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					isClassicView: m = !1
				} = e;
				const u = Object(r.d)(),
					b = Object(r.e)(c.F),
					x = Object(r.e)(c.db),
					h = Object(r.e)(e => Object(c.Db)(e, {
						postId: s
					})),
					E = Object(r.e)(e => Object(c.Ab)(e, {
						userName: t
					}));
				Object(o.useEffect)(() => {
					E || u(Object(i.d)(t))
				}, [u, t, s, E]);
				const O = () => n.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(p.a.hostAvatar, {
						[p.a.classicView]: m
					})
				}, n.a.createElement("div", {
					className: p.a.snoovatar
				}, n.a.createElement(d.a, {
					userName: t,
					isNSFW: !b,
					className: p.a.isImage
				})), n.a.createElement(l.a, {
					ringId: `${s}`,
					className: Object(a.a)(p.a.hostRings, {
						[p.a.nightMode]: x
					}),
					ringClassName: "hostRing"
				}));
				return m ? n.a.createElement(O, null) : n.a.createElement("div", {
					className: p.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, n.a.createElement("div", {
					className: p.a.upcomingTalkContainer
				}, n.a.createElement(O, null), n.a.createElement("div", {
					className: p.a.upcomingTalkInfo
				}, n.a.createElement("div", {
					className: p.a.upcomingTalkLabel
				}, C._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), n.a.createElement("div", {
					className: p.a.upcomingTalkHost
				}, "u/", t), h && n.a.createElement(g, null))))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				C = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				f = s.n(O);
			const v = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(f.a.icon, f.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case x.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case x.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case x.o.TEXT:
						case x.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case x.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case x.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case x.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: x,
					toggle: O,
					useMediaIcons: v
				} = e, _ = s || x, j = Object(a.e)(g.b), P = Object(a.e)(g.c), w = t => {
					(j || P) && (t.preventDefault(), e.showModalOnPostLinkClick(_))
				}, I = _.media, y = Object(h.p)(x), T = n && !!s;
				return I && !y && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(u.a)(_)) || !!x.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": E.a.MEDIA,
					onClick: O
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: f.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, k(_.media && _.media.type, T, x), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(f.a.icon, f.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: f.a.icon
				})) : _.source && _.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					href: _.source.url,
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source,
					sourceElement: l ? C.SourceElement.PostImage : C.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(f.a.icon, f.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(_.permalink),
					rel: "nofollow",
					onClick: w
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: f.a.icon
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
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const p = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(i.b, {
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = s.n(C),
				O = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				k = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				_ = s.n(k);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = c.a.wrapped(h.default, "InternalLink", _.a), w = c.a.div("Wrapper", _.a), I = c.a.div("Row", _.a), y = c.a.wrapped(O.a, "CommentIcon", _.a), T = c.a.div("TitleContainer", _.a), S = c.a.div("PostTitleContainer", _.a), M = c.a.wrapped(p.c, "PostTitle", _.a), N = c.a.wrapped(u.d, "PostTopMeta", _.a), R = c.a.wrapped(u.a, "MetaSeparator", _.a), L = Object(r.b)(() => Object(a.c)({
				comment: f.b,
				isBlockingInterstitialEnabled: v.b,
				isBlockingInterstitialV2Enabled: v.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(R, null), n.a.createElement(N, {
					metaSeparatorClassName: _.a.postTopMetaMetaSeparator,
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
					showModalOnAuthorLinkClick: a
				} = e;
				if (!t) return null;
				const i = s || t.author,
					d = `/user/${i}/`;
				return n.a.createElement(P, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), a(d))
					}
				}, i)
			};
			t.a = Object(d.a)(Object(x.b)(L(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.a, {
					className: Object(i.a)(E.a.compactPostStyles, _.a.overviewCommentPost, {
						[_.a.banned]: !!e.post.bannedBy,
						[_.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(w, {
					style: {
						background: Object(g.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(y, null), n.a.createElement(T, null, j._("{postAuthor} commented on {postTitle} {postMeta}", [j._param("postAuthor", D({
					...e
				})), j._param("postTitle", n.a.createElement(S, null, n.a.createElement(M, {
					outboundLinkClassName: _.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: _.a.postTitleTitle
				}))), j._param("postMeta", A(e))], {
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(d.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: d,
					redditStyle: l,
					theme: u,
					...b
				} = e;
				return n.a.createElement("div", p({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a,
					"data-adclicklocation": c.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
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
				}) : n.a.createElement(a.a, {
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
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				v = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: f,
					isOverlay: k,
					isTopicPage: _,
					post: j,
					shouldShowSubscribeButton: P,
					subredditOrProfile: w,
					tooltipType: I
				} = e, y = !!_, T = Object(E.a)(), S = Object(r.e)(e => !!w && Object(a.i)(e, w.id));
				return n.a.createElement("div", {
					className: v.a.metaContainer
				}, !o && !j.isSponsored && w && n.a.createElement(d.a, {
					postId: j.id,
					subredditName: w.name
				}, n.a.createElement(u.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: T
					}
				}, w.displayText)), w && w.isQuarantined && n.a.createElement(p.a, null), !o && !j.isSponsored && w && P && !f && n.a.createElement(b.a, {
					className: v.a.SubscribeButton,
					getEventFactory: e => Object(C.k)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(O.h)(w) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: j.id,
					size: h.d.XXS,
					small: !0
				}), !o && !j.isSponsored && n.a.createElement(g.b, null), !o && !j.isSponsored && n.a.createElement(c.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), n.a.createElement(m.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: I,
					isModWithUserNotesPermissions: S
				}), n.a.createElement(l.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					post: j,
					tooltipType: I
				}), !y && n.a.createElement(i.a, {
					hideCta: s,
					thing: j,
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
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
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
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					isOverlay: g,
					isVoteCountAnimation: C,
					postId: E,
					shouldShowUpvoteRatioOnHover: O
				} = e, f = `upvote-button-${t.id}${g?"-overlay":""}`;
				return n.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), n.a.createElement(i.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: f,
					isVoteCountAnimation: C,
					isCountAnimShadowTestEnabled: u,
					postId: E,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/showPromotedCTA.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: C.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: C.Q,
					showPromotedCTA: g.a,
					moderatorPermissions: b.m,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.s,
					flairStyleTemplate: c.W,
					showCTAExperimentDesign: u.a
				},
				O = Object(o.b)(() => Object(n.c)(E), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === i.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(O(Object(d.b)(e)))
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
				return a
			})), s.d(t, "f", (function() {
				return i
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
				a = 4,
				i = 1e4,
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
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(a.a, {
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
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, o, r, a) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, o) => n.a.createElement(r.a, {
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
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(o.k)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return i
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
			const a = e => {
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
				i = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.ib)(s),
					post: Object(r.J)(s, e),
					userSubreddit: Object(r.sb)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
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
				p = (e, t, s, o, a, i) => d => ({
					...Object(r.n)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.J)(d, e, void 0, i),
					subreddit: Object(r.ib)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: a
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
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.cg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(o.a)(a, e => e === n.Tf)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePrivate.a2ccd2718f776efdf4fc.js.map