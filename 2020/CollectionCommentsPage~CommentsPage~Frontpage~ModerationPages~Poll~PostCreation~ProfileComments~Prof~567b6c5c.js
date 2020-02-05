// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c.cf482129962c719c08c2.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c"], {
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				y = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				I = s("./src/reddit/icons/fonts/Report/index.tsx"),
				S = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				T = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				k = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				w = s("./src/reddit/components/PostBadges/index.m.less"),
				M = s.n(w);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => o.a.createElement("span", L({
					className: M.a.removalReason
				}, e), e.children),
				B = Object(l.e)("posts.archived"),
				R = Object(l.e)("modTools.commentsLocked"),
				F = Object(l.e)("modTools.moderatorOf"),
				A = Object(l.e)("modTools.stickiedPost"),
				H = Object(l.e)("modTools.pinnedPost"),
				X = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				W = Object(h.t)({
					isProfilePostListing: h.H,
					isSubreddit: h.I,
					pageLayer: e => e
				}),
				D = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.r)(e, {
							postId: s.id
						})
					},
					modModeEnabled: h.N
				}),
				U = Object(r.b)(D, (e, t) => ({
					onHideTooltip: () => e(Object(m.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = W(U(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: r,
					inSubredditOrProfile: i,
					isCompactPinnedPost: l,
					isPinned: m,
					isProfilePostListing: h,
					language: O,
					modModeEnabled: w,
					onHideTooltip: W,
					onOpenRemovalReasonModal: D,
					onShowTooltip: U,
					post: V,
					tooltipType: K
				} = e;
				const G = {
						caretOnTop: !1
					},
					J = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === x.a.SUBREDDIT,
					q = X("Approve", V.id, K),
					z = X("Archived", V.id, K),
					Z = X("Automod", V.id, K),
					Q = X("Lock", V.id, K),
					Y = X("Mod", V.id, K),
					$ = X("Remove", V.id, K),
					ee = X("Report", V.id, K),
					te = X("Spam", V.id, K),
					se = X("Sticky", V.id, K),
					ne = X("Pinned", V.id, K);
				return o.a.createElement("div", {
					className: t
				}, i && s && V.distinguishType === u.B.MODERATOR && o.a.createElement(n.Fragment, null, o.a.createElement(P.a, {
					className: M.a.modIcon,
					desc: F(O, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: Y,
					text: F(O, {
						displayText: s
					})
				}, G))), V.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(C.a, {
					className: M.a.archivedIcon,
					desc: B(O),
					id: z,
					onMouseEnter: U(z),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: z,
					text: B(O)
				}, G))), V.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: M.a.lockIcon,
					desc: R(O),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: Q,
					text: R(O)
				}, G))), r && Object(g.k)(V) && !l && o.a.createElement(n.Fragment, null, o.a.createElement(T.a, {
					className: M.a.stickyIcon,
					desc: A(O),
					id: se,
					onMouseEnter: U(se),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: se,
					text: A(O)
				}, G))), h && m && o.a.createElement(n.Fragment, null, o.a.createElement(T.a, {
					className: M.a.stickyIcon,
					desc: H(O),
					id: ne,
					onMouseEnter: U(ne),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: ne,
					text: H(O)
				}, G))), (V.isApproved || V.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(E.a, {
					className: M.a.approveIcon,
					desc: Object(v.a)(O, V),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: q,
					text: Object(v.a)(O, V)
				}, G))), Object(_.a)(V) && o.a.createElement(n.Fragment, null, o.a.createElement(y.a, {
					className: M.a.removeIcon,
					desc: Object(v.c)(O, V),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: W
				}), J && o.a.createElement(b.a, {
					className: M.a.addRemovalReason,
					onClick: D,
					text: Object(a.c)("Add a removal reason")
				}), (V.modRemovalReason || V.modNote) && o.a.createElement(N, {
					onMouseEnter: U($),
					onMouseLeave: W
				}, o.a.createElement(c.c, null, "Removal reason")), o.a.createElement(p.c, L({
					tooltipId: $,
					text: Object(v.c)(O, V)
				}, G))), V.bannedBy && V.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: M.a.spamIcon,
					desc: Object(v.e)(O, V),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: te,
					text: Object(v.e)(O, V)
				}, G))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: Object(d.a)(M.a.automoderator, !!V.bannedBy && M.a.isRemoved),
					desc: Object(v.b)(O),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: Z,
					text: Object(v.b)(O)
				}, G))), Object(f.a)(V) && !w && o.a.createElement(n.Fragment, null, o.a.createElement(I.a, {
					className: M.a.reportIcon,
					desc: Object(v.d)(O, V.numReports),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: W
				}), o.a.createElement(p.c, L({
					tooltipId: ee,
					text: Object(v.d)(O, V.numReports)
				}, G))))
			}))
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				u = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/Input/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				v = s("./src/reddit/icons/svgs/Search/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				I = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				P = s.n(k),
				w = s("./src/lib/lessComponent.tsx");
			const M = w.a.div("Container", P.a),
				L = w.a.h2("PostTitle", P.a),
				N = w.a.div("MetaLine", P.a),
				B = w.a.span("SubredditName", P.a),
				R = w.a.time("InfoSpan", P.a),
				F = Object(i.c)({
					subreddit: (e, t) => {
						let {
							collection: {
								subredditId: s
							}
						} = t;
						return s ? Object(T.S)(e, {
							subredditId: s
						}) : void 0
					},
					user: E.i
				});
			class A extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						language: t,
						subreddit: s,
						user: o,
						onHoverActionText: r
					} = this.props, a = s && Object(I.e)(s) && o ? Object(y.c)(Object(S.f)(o)) : s ? s.displayText : "", i = e.postIds.length;
					return c.a.createElement(M, {
						onClick: this.onClick,
						className: P.a.container
					}, c.a.createElement(L, {
						"data-redditstyle": !0
					}, e.title), c.a.createElement(N, {
						"data-redditstyle": !0
					}, a && c.a.createElement(B, {
						"data-redditstyle": !0
					}, a), a && c.a.createElement(j.b, null), c.a.createElement(R, null, Object(n.c)(t, "postCreation.postsCount", i)), c.a.createElement(j.b, null), c.a.createElement(R, null, Object(n.a)(t, "postCreation.collections.creationTime", {
						time: Object(C.d)(t, e.createdAtUTC)
					}))), r && c.a.createElement("div", {
						className: P.a.onHoverActionText
					}, c.a.createElement("span", null, r)))
				}
			}
			var H = Object(a.b)(F)(A),
				X = s("./src/reddit/helpers/trackers/postCollection.ts"),
				W = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				D = s.n(W);
			const U = Object(n.e)("postCreation.collections.collectionsListEmptyText"),
				V = Object(n.e)("postCreation.collections.noCollectionMatchingFilter"),
				K = Object(n.e)("postCreation.collections.filterPlaceholder"),
				G = Object(n.e)("postCreation.collections.collectionsListTitle"),
				J = Object(n.e)("postCreation.collections.createCollection"),
				q = "".concat(o.a.assetPath, "/img/snoo-drafts.png"),
				z = w.a.div("TopRow", D.a),
				Z = w.a.div("TitleRow", D.a),
				Q = w.a.div("DetailsContainer", D.a),
				Y = w.a.wrapped(f.a, "ButtonRow", D.a),
				$ = w.a.div("CloseWrapper", D.a),
				ee = w.a.wrapped(h.a, "Close", D.a),
				te = w.a.div("Empty", D.a),
				se = w.a.img("EmptyImage", D.a),
				ne = w.a.p("EmptyText", D.a),
				oe = w.a.div("FilterWrapper", D.a),
				re = w.a.wrapped(x.a, "FilterInput", D.a),
				ce = w.a.wrapped(v.a, "SearchIcon", D.a),
				ae = w.a.wrapped(_.a, "PlusIcon", D.a),
				ie = w.a.wrapped(b.j, "CreateCollectionButton", D.a),
				le = Object(d.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				de = Object(i.c)({
					collections: O.v,
					language: E.P
				}),
				ue = Object(a.b)(de, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = g.b;
							s && (t = Object(g.u)(s, !!n)), e(Object(u.y)(t))
						}
					}
				});
			class me extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(X.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === p.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(X.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(X.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => c.a.createElement(H, {
						key: e.id,
						collection: e,
						language: this.props.language,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(X.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return c.a.createElement(te, null, c.a.createElement(se, {
						src: q
					}), c.a.createElement(ne, null, U(this.props.language)))
				}
				renderNoFilterMatches() {
					return c.a.createElement(te, null, c.a.createElement(ne, null, V(this.props.language)))
				}
				render() {
					const {
						collections: e,
						language: t,
						titleText: s
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = le(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return c.a.createElement("div", {
						className: D.a.wrapper,
						"data-redditstyle": !0
					}, c.a.createElement(z, null, c.a.createElement(Z, {
						"data-redditstyle": !0
					}, s || G(t), c.a.createElement($, {
						onClick: this.close
					}, c.a.createElement(ee, {
						"data-redditstyle": !0
					}))), c.a.createElement(oe, null, c.a.createElement(ce, null), c.a.createElement(re, {
						placeholder: K(t),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), c.a.createElement(Q, null, n), c.a.createElement(Y, null, c.a.createElement(ie, {
						onClick: this.handleCreateCollectionClicked
					}, c.a.createElement(ae, null), J(t))))
				}
			}
			const pe = Object(l.a)(ue(Object(m.b)(me)));
			t.a = pe
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/postCollection/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				x = s("./src/reddit/controls/Input/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				C = s.n(E),
				j = s("./src/lib/lessComponent.tsx");
			const y = Object(a.e)("postCreation.cancel"),
				I = Object(a.e)("postCreation.create"),
				S = Object(a.e)("postCreation.save"),
				T = Object(a.e)("postCreation.collections.createCollection"),
				k = Object(a.e)("postCreation.collections.createModal.details"),
				P = Object(a.e)("postCreation.collections.createModal.giveATitle"),
				w = Object(a.e)("postCreation.collections.createModal.editTitle"),
				M = Object(a.e)("postCreation.collections.createModal.titlePlaceholderText"),
				L = j.a.div("Container", C.a),
				N = j.a.div("Content", C.a),
				B = j.a.div("TitleRow", C.a),
				R = j.a.div("Details", C.a),
				F = j.a.wrapped(u.e, "Footer", C.a),
				A = j.a.wrapped(p.i, "CancelButton", C.a),
				H = j.a.div("CloseWrapper", C.a),
				X = j.a.wrapped(v.a, "CloseIcon", C.a),
				W = j.a.label("Label", C.a),
				D = j.a.wrapped(x.a, "TitleInput", C.a),
				U = j.a.wrapped(_.a, "AddCollectionIcon", C.a),
				V = j.a.wrapped(p.f, "PrimaryActionButton", C.a),
				K = j.a.wrapped(h.a, "LoadingIcon", C.a),
				G = j.a.wrapped(b.b, "ErrorText", C.a),
				J = Object(c.c)({
					collection: g.q,
					error: g.c,
					isPending: g.g,
					language: O.P
				}),
				q = Object(r.b)(J, (e, t) => ({
					onCreate: (t, s) => e(Object(d.b)(t, s)),
					onUpdate: s => e(Object(d.h)(t.collectionId, s))
				}));
			class z extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s,
						language: n
					} = this.props, r = !e, c = !!this.state.collectionTitle.trim(), a = r ? I : S, i = r ? P : w;
					return o.a.createElement(L, null, o.a.createElement(H, {
						onClick: this.props.onCancel
					}, o.a.createElement(X, null)), o.a.createElement(N, null, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(B, null, o.a.createElement(U, null), T(n)), o.a.createElement(R, null, k(n))), o.a.createElement(W, null, i(n), o.a.createElement(D, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: M(n),
						value: this.state.collectionTitle
					}))), o.a.createElement(F, null, o.a.createElement(f.a, null, o.a.createElement(A, {
						onClick: this.props.onCancel
					}, y(n)), o.a.createElement(V, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !c
					}, s ? o.a.createElement(K, {
						sizePx: 10
					}) : a(n))), t && o.a.createElement(G, {
						language: n
					}, Object(l.a)(n, t))))
				}
			}
			t.a = Object(i.a)(q(z))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			}));
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				p = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/i18n/utils.ts"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				I = Object(a.c)({
					flairData: f.d,
					subreddit: g.S,
					isMod: (e, t) => !!Object(v.j)(e, t)
				});
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(O.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, c = o.displayText, {
						templates: a,
						templateIds: i
					} = n, {
						canSave: l
					} = this.canSave();
					return r.a.createElement(m.a, {
						className: s
					}, r.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: Object(h.c)("Select ".concat(Object(h.b)("subredditName", c), " flair"))
					}), r.a.createElement(p.a, {
						flair: t,
						flairTemplateType: _.d.LinkFlair,
						placeholderText: Object(h.c)("Post Title")
					}), r.a.createElement(b.a, {
						flair: t,
						flairTemplateType: _.d.LinkFlair,
						subredditId: o.id,
						templates: a,
						templateIds: i,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: j.a.buttonsRow
					}, r.a.createElement(x.f, {
						disabled: !l,
						onClick: this.onApply
					}, Object(h.c)("Apply")), r.a.createElement(x.i, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, Object(h.c)("Clear Flair"))))
				}
			}
			const T = Object(c.b)(I, (e, t) => ({
				closeModal: () => e(Object(d.i)(t.modalId))
			}))(S);
			t.a = Object(l.a)(Object(i.b)(T))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = s.n(a);
			const l = c.a.span("TextWrapper", i.a),
				d = c.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(l, null, e.text, " ")), "Button", i.a),
				u = c.a.wrapped(d, "ApproveButton", i.a),
				m = c.a.wrapped(d, "RemoveButton", i.a),
				p = e => o.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = s("./src/reddit/components/SourceLink/index.m.less"),
				d = s.n(l),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", d.a),
				p = u.a.div("SourceLinkWrapper", d.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: i,
					isSponsored: l
				} = s;
				return i ? o.a.createElement(p, {
					className: Object(r.a)({
						[d.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: i.url,
					isSponsored: l,
					source: i
				}, Object(c.a)(s), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = _(e, ["small", "shouldReverseColor"]);
					const r = s ? i.i : i.f;
					return o.a.createElement(r, h({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = _(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = n ? i.f : i.i;
					return o.a.createElement(c, h({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				g = x.a.wrapped(l.a, "Checkmark", p.a),
				O = x.a.wrapped(d.a, "Plus", p.a),
				E = x.a.div("ButtonSpacer", p.a);
			class C extends o.a.Component {
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
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: c,
							onUnsubscribe: a,
							postId: i,
							sendEvent: l,
							small: d = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: x,
							getEventFactory: C,
							onSubscriptionsRequested: j
						} = e,
						y = _(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						I = this.state.isHovered;
					let S = m ? Object(r.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribed")) : Object(r.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribe"));
					return m && I && (S = Object(r.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".unsubscribe"))), m ? this.state.hasJustSubscribed || x ? o.a.createElement(f, h({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, y), d && o.a.createElement(g, null), !d && !I && o.a.createElement(g, null), !d && S) : d ? null : o.a.createElement(E, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v, h({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, y, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(O, null), !d && S))
				}
			}
			t.a = Object(a.a)(Object(c.b)(C))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: a.P,
				userIsSubscriber: c.cb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				c = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "g", (function() {
				return l
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				c = "PostCreation-EventEducationTooltip",
				a = 300,
				i = a,
				l = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(n),
				r = s("./node_modules/raf/index.js"),
				c = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				x = s("./src/higherOrderComponents/asModal/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = s.n(v);
			var g = Object(x.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return i.a.createElement("div", {
						className: f.a.wrapper
					}, i.a.createElement(_.a, {
						className: f.a.titleRow
					}, s), i.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), i.a.createElement(_.a, {
						className: f.a.buttonRow
					}, i.a.createElement(h.f, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, Object(p.c)("Ok"))))
				}),
				O = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(O);
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return S
			}));
			const C = Object(d.c)({
				activeModalId: b.a
			});
			class j extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(o()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: n,
						errorModalTitle: o = Object(p.c)("Error"),
						moreText: r = Object(p.c)("More")
					} = this.props, {
						modalId: c,
						textHasOverflowed: a
					} = this.state;
					return i.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, s)
					}, i.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), a && i.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, r), t === c && i.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const y = Object(l.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(j),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, c = r.length ? r : o ? [o] : [];
					return c.length ? i.a.createElement("div", {
						className: t
					}, c.map((e, t) => i.a.createElement(y, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				S = e => i.a.createElement(I, {
					fallbackMessage: Object(p.c)("Something went wrong"),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(c);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return a
			})), s.d(t, "E", (function() {
				return i
			})), s.d(t, "q", (function() {
				return l
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "u", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "s", (function() {
				return b
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "o", (function() {
				return h
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "F", (function() {
				return v
			})), s.d(t, "C", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "w", (function() {
				return I
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "y", (function() {
				return P
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "D", (function() {
				return L
			})), s.d(t, "z", (function() {
				return N
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "x", (function() {
				return R
			})), s.d(t, "A", (function() {
				return F
			})), s.d(t, "B", (function() {
				return A
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.n)(e)
				}),
				a = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				i = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				b = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t), {
					scheduledPost: c(e)
				}),
				x = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t), {
					scheduledPost: c(e)
				}),
				h = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				_ = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				v = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				f = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				g = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				O = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				E = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				y = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				S = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				T = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				P = (e, t, s) => c => Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.k)(e)
				}, r(c), {
					actionInfo: o.actionInfo(c, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				w = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				M = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				L = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				N = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e), {
					scheduledPost: c(t)
				}),
				B = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				R = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e), {
					scheduledPost: c(t)
				}),
				F = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				A = () => (e, t) => {
					const s = r(e);
					return Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s, {
						actionInfo: Object.assign({}, s.actionInfo, {
							reason: "failed_post"
						}),
						scheduledPost: c(t)
					})
				}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("calendar"), i.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("live"), i.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("sticky"), i.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(c);
			const i = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				i = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: a
				} = e, u = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", l({
					className: Object(c.a)(i.a.expandRightContainer, t)
				}, u), o.a.createElement("div", {
					className: i.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: i.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c.cf482129962c719c08c2.js.map