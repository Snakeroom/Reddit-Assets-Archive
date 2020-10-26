// https://www.redditstatic.com/desktop2x/ModListing.138607fc1ce9a8a65889.js
// Retrieved at 10/26/2020, 4:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				d = s.n(n),
				o = s("./src/reddit/components/ModHub/Content/index.m.less"),
				a = s.n(o);
			t.a = e => d.a.createElement("div", {
				className: a.a.noPermissions
			}, d.a.createElement("img", {
				className: a.a.rememberTheHuman,
				src: "".concat(i.a.assetPath, "/img/content-gate-icons/remember-the-human.png")
			}), e.isModerator ? r.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : r.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), d.a.createElement("div", {
				className: a.a.noPermissionsSmallText
			}, e.isModerator ? r.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? r.fbt._("You must be a moderator of {subredditName} to view this page", [r.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : r.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, s) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, s) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(c.b, "SubredditIcon", b.a),
				x = p.a.span("Label", b.a),
				_ = Object(l.c)({
					subredditOrProfile: u.M
				});
			var f = Object(a.b)(_)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, n.a.createElement(n.a.Fragment, null, n.a.createElement(h, {
					subredditOrProfile: s
				}), n.a.createElement(x, null, s.displayText)))
			});
			var E = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: i
					} = e;
					const r = i.map(e => n.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return n.a.createElement("div", {
						className: s
					}, r)
				},
				g = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(g);
			const O = p.a.div("CommunityCount", S.a),
				M = p.a.wrapped(E, "SubredditsOrProfiles", S.a),
				C = p.a.wrapped(d.a, "SidebarSubreddit", S.a),
				I = p.a.wrapped(d.a, "ModalSubreddit", S.a);
			var j;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(j || (j = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: r,
					subredditCategory: d = {
						name: i.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : I, l = s.length, c = t && s.length > 4;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(O, null, i.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [i.fbt._plural(l, "number"), i.fbt._param("category", d.name)], {
					hk: "33iWe4"
				})), l > 0 && n.a.createElement(M, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => n.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), l > 0 && c && n.a.createElement(o.o, {
					onClick: r
				}, i.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === i.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(d.b)("clear"), e.className)
			})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var i = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(i),
				n = s("./node_modules/react/index.js"),
				d = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/pages/modListing/index.ts"),
				b = s("./src/reddit/components/EmptySubreddit.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				x = s("./src/reddit/components/ListingPostList/index.tsx"),
				_ = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/higherOrderComponents/asModal/index.tsx"),
				g = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				M = s("./src/reddit/controls/TextButton/index.tsx"),
				C = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/modQueue.ts"),
				y = s("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				F = s.n(y);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = Object(E.a)(e => d.a.createElement(S.d, {
				className: F.a.modalBody
			}, d.a.createElement(S.h, null, d.a.createElement(I.a, null, d.a.createElement(S.p, {
				className: F.a.modalTitle
			}, d.a.createElement(C.a, {
				className: F.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), d.a.createElement(M.a, {
				onClick: e.onCloseModal
			}, d.a.createElement(S.b, null)))), d.a.createElement(S.k, {
				className: F.a.modalMain
			}, d.a.createElement("div", {
				className: F.a.modalDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), d.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), P = e => d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
				className: F.a.feedDetailsTitle
			}, d.a.createElement(C.a, {
				className: F.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), d.a.createElement("div", {
				className: F.a.feedDetailsDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? d.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : d.a.createElement("div", {
				className: F.a.loadingBar
			})), k = Object(a.c)({
				isModalOpen: Object(j.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: v.f
			});
			var H = Object(o.b)(k, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(g.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: s,
						toggleModal: i
					} = e;
					return s ? d.a.createElement(d.a.Fragment, null, d.a.createElement(P, {
						moderatedCommunitiesIds: s,
						onSeeMoreDetails: i
					}), t && d.a.createElement(L, {
						moderatedCommunitiesIds: s,
						onCloseModal: i,
						onOverlayClick: i,
						withOverlay: !0
					})) : null
				}),
				w = s("./node_modules/react-router-redux/es/index.js"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/controls/Button/index.tsx");
			const G = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				K = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				R = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var A = s("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var Y = s("./src/reddit/constants/keycodes.ts"),
				J = s("./src/reddit/layout/row/Inline/index.tsx"),
				X = s("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = s.n(X);
			const q = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
			});
			class U extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(G()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === Y.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(J.a, null, d.a.createElement("input", {
						className: Q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: f.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), d.a.createElement(B.i, {
						"aria-label": f.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, f.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && d.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var W = Object(o.b)(q, e => ({
					hide: t => e(Object(m.a)(t))
				}))(Object(T.c)(U)),
				z = s("./src/lib/lessComponent.tsx"),
				Z = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/icons/fonts/Clear/index.tsx"),
				ee = s("./src/reddit/selectors/profile.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ie = s.n(se);
			const re = z.a.wrapped(Z.b, "SubredditIcon", ie.a),
				ne = Object(a.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const s = Object(te.B)(e, {
							subredditName: t.subredditName
						});
						if (!s) {
							const s = (e => e.startsWith(l.Ub) ? e.slice(2) : e)(t.subredditName);
							return s && Object(ee.j)(e, {
								profileName: s
							}) || null
						}
						return s
					}
				});
			class de extends d.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(K()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? d.a.createElement(O.a, {
						className: ie.a.row,
						to: e.subredditOrProfile.url
					}, d.a.createElement(re, {
						subredditOrProfile: e.subredditOrProfile
					}), d.a.createElement("span", {
						className: ie.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && d.a.createElement("button", {
						"aria-label": f.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ie.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, d.a.createElement($.a, null))) : null
				}
			}
			var oe = Object(o.b)(ne, e => ({
					unhide: t => e(Object(m.d)(t))
				}))(Object(T.c)(de)),
				ae = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				le = s.n(ae);
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ue = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const s = t.map(e => d.a.createElement(oe, {
						key: e,
						subredditName: e
					}));
					return d.a.createElement(d.a.Fragment, null, t.length ? d.a.createElement("div", {
						className: le.a.rows
					}, s) : d.a.createElement("div", {
						className: le.a.noRows
					}, ce._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				me = s("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				be = s.n(me);
			const {
				fbt: pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), he = Object(D.t)({
				filtered: e => !!e && Object(A.d)(e.url)
			}), xe = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class _e extends d.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(R(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement("div", {
						className: be.a.container
					}, d.a.createElement("div", {
						className: be.a.hideCommunitiesHeader
					}, pe._("Hide communities", null, {
						hk: "15OtHo"
					})), d.a.createElement(B.o, {
						className: be.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? pe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : pe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && d.a.createElement("div", {
						className: be.a.inputContainer
					}, d.a.createElement(W, null), d.a.createElement(ue, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var fe = he(Object(o.b)(xe, (e, t) => {
					let {
						filtered: s
					} = t;
					return {
						toggleFiltered: () => e(Object(w.b)(s ? A.a : A.b))
					}
				})(Object(T.c)(_e))),
				Ee = s("./src/reddit/components/SidebarContainer/index.tsx"),
				ge = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Se = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Oe = () => d.a.createElement(Ee.a, null, d.a.createElement(Se.a, {
					title: f.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, d.a.createElement(H, null), d.a.createElement(fe, null)), d.a.createElement(ge.a, null)),
				Me = s("./src/reddit/constants/page.ts"),
				Ce = s("./src/reddit/constants/parameters.ts"),
				Ie = s("./src/reddit/helpers/trackers/screenview.ts"),
				je = s("./src/reddit/layout/page/Listing/index.tsx"),
				ve = s("./src/reddit/selectors/moderatorPermissions.ts");
			const ye = Object(a.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort || l.O.HOT
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(A.d)(s.path)
				}, ve.h, ve.c, (e, t, s, i, n) => {
					const d = r()([...Object(c.a)(e)]),
						o = Ce.x in d && d[Ce.x].toUpperCase(),
						a = "string" == typeof o && o in l.Sb ? l.Sb[o] : l.Tb,
						m = s ? Me.e : Me.d;
					return {
						filtered: s,
						isModerator: i,
						isModeratorWithPostPerms: n,
						listingKey: Object(u.a)(m, t, d),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				Fe = Object(o.b)(ye, (e, t) => ({
					onLoadMorePosts: () => e(m.c({
						sort: t.match.params.sort
					}))
				}));
			class Ne extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ie.f)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => d.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? A.b : A.a;
					return d.a.createElement("div", null, this.props.isModeratorWithPostPerms ? d.a.createElement(je.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: d.a.createElement(d.a.Fragment, null, d.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), d.a.createElement(h.a, null), d.a.createElement(x.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: d.a.createElement(Oe, null)
					}) : d.a.createElement(_.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Fe(Ne)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.138607fc1ce9a8a65889.js.map