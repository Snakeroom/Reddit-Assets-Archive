// https://www.redditstatic.com/desktop2x/SubredditTopContent.4987aedd30500541b902.js
// Retrieved at 5/24/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_1sf7GjDaEBhme5ClA39yBo",
				closeButton: "_3NeLiUZNL4IFv7G1HHx8Km",
				communityBackground: "_1pX_BOlTi53SAMVSDu_OrT",
				seeAllPosts: "_2zf-tJ6dr3umn1gcuEpDk8",
				communityDescriptionPlaceholder: "_1RYE13EcDNn1A1X1-h42f_",
				arrowPlaceholder: "_1q9k3G4VKHdAOsl64CbSge",
				headerLink: "_2HnhAFvq_dYxe2LgLqRXfK",
				layout: "_1p-hDqS1MBOTryteGnBenr",
				widgetHeader: "_3vKpqOprvaCysVAD8GUe6L"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/memoize.js"),
				i = s.n(r),
				n = s("./node_modules/react/index.js"),
				d = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = s("./src/reddit/components/Widgets/Base/index.tsx"),
				y = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				b = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/chooseVariant/index.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const C = e => Object(D.P)(e) || b.Yf.ShowTopContent === Object(x.c)(e, {
				experimentEligibilitySelector: x.a,
				experimentName: b.Sf
			});
			var v = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				k = s.n(U);
			const E = Object(c.b)(() => Object(l.c)({
				inSubredditTopContentExperiment: C,
				subredditUrl: v.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => y.a(s(), t)),
				trackDismissClick: t => e((e, s) => y.c(s(), t)),
				trackPostView: i()((t, s, o) => e((e, r) => y.m(r(), t, s, o)), (e, t) => {
					let {
						id: s
					} = e;
					return `${s}-${t}`
				})
			}));
			class S extends d.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: s
						} = this.props;
						e && s(e), t()
					}
				}
				componentDidMount() {
					const {
						discoveryUnit: e,
						trackDiscoveryUnitView: t
					} = this.props;
					e && t(e)
				}
				render() {
					const {
						inSubredditTopContentExperiment: e,
						subredditUrl: t,
						topContent: s
					} = this.props;
					if (!e || !s) return null;
					const {
						postIds: r,
						range: i
					} = s, n = `${t}${p.cb.TOP}?t=${i}`, c = d.a.createElement(_.a, {
						className: k.a.widgetHeader
					}, d.a.createElement("button", {
						className: k.a.closeButton,
						onClick: this.onCloseClick
					}, d.a.createElement(h.b, {
						className: k.a.closeIcon,
						"data-redditstyle": !0
					})), d.a.createElement(a.a, {
						className: k.a.headerLink,
						to: n
					}, o.fbt._("Top posts from the past {range}", [o.fbt._param("range", i)], {
						hk: "xhJKf"
					})));
					return d.a.createElement("div", {
						className: this.props.className
					}, d.a.createElement(m.a, {
						className: k.a.layout,
						header: c,
						hidePadding: !0
					}, d.a.createElement(u.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: r,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.default = E(S)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent.4987aedd30500541b902.js.map